module.exports = async (ctx, next) => {
  try {
    const res = await ctx.models.Article.myFind({});
    console.log(res)
    if (res.length > 0) {
      ctx.state.msg = "获取成功";
      ctx.state.status = true;
      ctx.body = res;
    } else {
      
      ctx.state.status = false;
      ctx.state.msg = "暂时没有文章";

    }
    
    
  } catch (err) {
    ctx.throw(500, err)
  }

  next();
}
