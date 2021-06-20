### 创建项目

- `egg-init 项目名称 --type simple 项目名称`
- 进入到项目 安装依赖



### 配置路由控制器



### 配置模板引擎

- `yarn add egg-view-ejs`

- 找到 plugin.js

  ```javascript
  exports.ejs = {
      enable: true,
      package: 'egg-view-ejs'
  }
  ```

- 找到 config.default.js

  ```javascript
  config.view = {
      mapping: {
          '.html': 'ejs'
      }
  }
  ```



### 配置公共地址

- 



### 路由 控制器 服务 配置相互协作实现爬取接口



### 中间件

- 匹配路由前、匹配路由完成的一系列操作
- 一个中间件是一个放置在 app/middleware 目录下的单独文件，需要exports 一个普通的function， 接受两个参数
  - options 中间件的配置项，框架会将 app.config 传递进来
  - app 当前应用的 application 的市里



### CSRF 安全机制



```html
    <form action="/add?_csrf=<%= csrf %> " method="POST">
      用户名：<input type="text" name="username" />
      <br />
      密码： <input type="password" name="password" />
      <br />
      <button type="submit">提交</button>
    </form>

    <form action="/add" method="POST">
      <input type="hidden" name="_csrf" value="<%= csrf %>">
      用户名：<input type="text" name="username" />
      <br />
      密码： <input type="password" name="password" />
      <br />
      <button type="submit">提交</button>
    </form>
```

- 初次访问页面时候给一个csrf秘钥 在提交表单时候进行验证



```javascript
  async index() {
    await this.ctx.render("home", {
      //  this.ctx.csrf 用户访问这个页面时候生成一个秘钥
      csrf: this.ctx.csrf,
    });
  }
```



### 设置Cookie

- 设置

  - `ctx.cookies.set(key, value, options)`

    - 第一个参数是cookie的名称
    - 第二个参数是cookie的值
    - 第三个参数是配置项

    ```javascript
        this.ctx.cookies.set("userInfo", JSON.stringify({
          name: "xcr",
          age: 18,
        }));
    ```

- 获取

  - `ctx.cookies.get(key, options)`

    ```javascript
        let userInfo = this.ctx.cookies.get("userInfo");
    ```

- 设置加密和解密cookie

  - 第三参数项

    ```javascript
        this.ctx.cookies.set(
          "userInfo",
          JSON.stringify({
            name: "xcr",
            age: 18,
          }),
          {
            signed: true,
            encrypt: true,
          }
        );
    ```

  - 解密

    ```javascript
        let userInfo = await this.ctx.cookies.get("userInfo", {
          encrypt: true
        });
    ```

  - 中文cookie

    - 设置加密可解决cookie中文问题

- 清除cookie

  - `this.ctx.cookies.set('userInfo', null)`
  - 设置 maxAge 为0 或 -1

### 设置session

- session是一种记录客户状态的机制，不同的是 cookie保存在客户端浏览器中，而session保存在服务器上

- 工作流程

  - 当浏览器访问服务器并发送第一次请求时，服务端会创建一个session对象，生成一个类似于key，value的键值对，然后key(cookie)返回到浏览器端，浏览器下次再访问时，携带key（cookie），找到对应的session(value)

- 使用：

  - 设置

    ```js
        this.ctx.session.username = {
          username: "xcr",
          age: 18,
        };
    ```

  - 获取

    ```js
        let userName = this.ctx.session.username
    ```

- 修改session默认配置

  - 在config.default.js中配置

    ```js
      config.session = {
        key: "SESSION_TEST",
        maxAge: 30 * 1000 * 60,
        renew: true,
        httpOnly: true,
        encrypt: true,
      };
    ```

    

### 
