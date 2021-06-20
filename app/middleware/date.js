module.exports = (options, app) => {
  return async (ctx, next) => {
    console.log(ctx.helper.formatData());
    await next();
  };
};
