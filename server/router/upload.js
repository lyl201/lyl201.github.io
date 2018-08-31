module.exports = async (ctx, next) => {
  ctx.state.status = true;
  ctx.body = ctx.uploadpath;
  if (ctx.uploadpath && ctx.uploadpath.avator) {

    try {
      const res = await ctx.models.User.myUpdate({
        username: ctx.request.body.username
      }, {
        avator: ctx.uploadpath.avator
      })
      console.log(res);

    } catch (err) {
        ctx.throw(500, err)
    }

  }
  next();
}
