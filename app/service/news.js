"use strict";

const Service = require("egg").Service;

class NewsService extends Service {
  async getNewsList() {
    // 通过抓取接口返回数据
    // curl 可获取远程数据
    let url = `${this.config.api}/appapi.php?a=getPortalList&catid=20&page=1`;

    let res = await this.ctx.curl(url);

    // 返回的是buffer

    // 转格式
    // 把 Buffer 格式数据转化成对象
    let result = JSON.parse(res.data);
    return result;
  }

  async getNewsContent(aid) {
    let url = `${this.config.api}/appapi.php?a=getPortalArticle&aid=${aid}`;
    let res = await this.ctx.curl(url);
    let result = JSON.parse(res.data);
    return result;
  }





}

module.exports = NewsService;
