module.exports = async (ctx, next) => {
  try {
    const res = await ctx.models.Article.myFind({
      title: ctx.request.body.title
    });
    console.log(res)
    if (res.length > 0) {
      ctx.state.msg = "该标题已经存在";
      ctx.state.status = false;
    } else {
      const article = new ctx.models.Article(ctx.request.body);
      const msg = await article.mySave();
      ctx.state.status = true;
      ctx.state.msg = "^_^";
    }
    ctx.body = {};
    
  } catch (err) {
    ctx.throw(500, err)
  }

  next();
}
