module.exports = (options, app) => {
  return async (ctx, next) => {
    let ip = `127.0.0.1`;
    console.log(options);

    // 获取客户端ip
    // console.log(ctx.request.ip);

    for (let i = 0; i < options.ips.length; i++) {
      if (ctx.request.ip === options.ips[i]) {
        ctx.status = 403;
        ctx.body = "您的ip已被屏蔽, 禁止访问";
        return;
      }
    }

    let check = options.ips.some((val) => {
        if(val === ctx.request.ip) {
            return true;
        }
    })

    if(check) {
        ctx.status = 403;
        ctx.body = "您的ip已被屏蔽, 禁止访问";
        return;
    }
    await next();
  };
};
