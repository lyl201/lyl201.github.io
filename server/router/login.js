module.exports = async (ctx, next) => {

  try {
    const res = await ctx.models.User.myFind({
       ...ctx.request.body, 
    });
    ctx.state.msg = res.length > 0 ? '登录成功' : '登录失败:用户名或密码错误';
    ctx.state.status = res.length !== 0;
    ctx.body = {username: ctx.request.body.username};

  } catch (err) {
    ctx.throw(500, err)
  }

  next()
  
}
