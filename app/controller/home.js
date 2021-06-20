"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    // await this.ctx.render("home", {
    //  this.ctx.csrf 用户访问这个页面时候生成一个秘钥
    // csrf: this.ctx.csrf,

    // 现在使用中间件设置全局变量

    // });

    this.ctx.cookies.set(
      "userInfo",
      JSON.stringify({
        name: "小超人",
        age: 18,
      }),
      {
        signed: true,
        encrypt: true,
      }
    );

    // this.ctx.session.username = JSON.stringify(
    //   {
    //     username: 'xcr',
    //     age:18
    //   }
    // );

    this.ctx.session.username = {
      username: "xcr",
      age: 18,
    };

    




    this.ctx.body = "首页";
  }

  async add() {
    this.ctx.body = this.ctx.request.body;
  }

  async logOut() {
    this.ctx.cookies.set("userInfo", null);

    this.ctx.redirect("/news");
  }

  async testSession() {}
}

module.exports = HomeController;
