module.exports = async (ctx, next) => {
  try {
    let article = null;
    console.log("object, ctx.request.body", ctx.request.body)
    if (ctx.request.body._id) {
      const res = await ctx.models.Article.myFind({
        _id: ctx.request.body._id
      });

      if (res.length > 0) {
        await ctx.models.Article.myUpdate({
          _id: ctx.request.body._id
        }, { ...ctx.request.body
        })
        ctx.state.msg = "更新成功";
        ctx.body = {
          _id: ctx.request.body._id
        };
      }
    } else {
      delete(ctx.request.body._id);
      article = new ctx.models.Article(ctx.request.body);
      await article.mySave();
      ctx.state.msg = "新增成功";
      ctx.body = {
        _id: article._id
      };
    }
    ctx.state.status = true;


  } catch (err) {
    ctx.throw(500, err)
  }

  next();
}
