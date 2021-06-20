"use strict";

const Controller = require("egg").Controller;

class NewsController extends Controller {
  async index() {
    // this.ctx.body = '新闻系统'
    let result = await this.service.news.getNewsList();
    let list = result.result;
    list.map((re) => {
      re.pic = this.config.api + re.pic;
    });

    let userInfo = this.ctx.cookies.get("userInfo", {
      encrypt: true
    });

    let userName = this.ctx.session.username

    console.log(this.ctx.session);

    await this.ctx.render("index", {
      list,
      userInfo: userInfo,
      userName
    });
  }

  async content() {
    let aid = this.ctx.query.aid;
    let result = await this.service.news.getNewsContent(aid);

    // 调用 helper扩展 的方法
    // console.log(this.ctx.helper.formatData());

    // 测试request的this 调用 request扩展
    // this.ctx.request.foo();

    await this.ctx.render("detail", {
      result: result.result[0],
    });
  }
}

module.exports = NewsController;
