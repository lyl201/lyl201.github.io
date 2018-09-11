module.exports = async (ctx, next) => {
  try {
    let res = null;
    const id = ctx.request.path.split('/article/')[1];

    console.log(id)
    if (id) {
      // 查询一条
      res = await ctx.models.Article.myFind({
        _id: id
      });
      ctx.state.msg = "获取成功";
      ctx.state.status = true;
      ctx.body = res[0];

    } else {
      // 查询所有
      res = await ctx.models.Article.myFind({});
      if (res.length > 0) {
        ctx.state.msg = "获取成功";
        ctx.state.status = true;
        ctx.body = res;
      } else {

        ctx.state.status = false;
        ctx.state.msg = "暂时没有文章";

      }
    }

  } catch (err) {
    ctx.throw(500, err)
  }

  next();
}
