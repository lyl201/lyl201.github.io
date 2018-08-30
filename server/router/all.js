module.exports = async (ctx, next) => {

  ctx.type = "application/json; charset=UTF-8";
  await next()
  console.log("================================\n");
  console.log("path      : ", ctx.path);
  console.log("uploadpath: ", ctx.uploadpath);
  console.log("body      : ", ctx.body, '\n');
  console.log("================================\n");

}
