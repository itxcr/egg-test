// 引入第三方模块
const  dateFormat = require("dateformat");

module.exports = {
    formatData(param) {
        param *= 1000;
        return dateFormat(param, 'yyyy-mm-dd HH:MM:ss')
    }
}