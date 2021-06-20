module.exports = (options, app) => {
  return async (ctx, next) => {
    // 设置模板全局变量

    ctx.state.csrf = ctx.csrf;

    await next();
  };
};
