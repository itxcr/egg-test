module.exports = {
    foo() {
        // this 就是 app 对象 在其中可以调用 app 上的方法 和 属性
        console.log(this);
    }
}