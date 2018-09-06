module.exports = async (ctx, next) => {

  await next()
  console.log("================================\n");
  console.log("path      : ", ctx.path);
  console.log("method    : ", ctx.method);
  console.log("uploadpath: ", ctx.uploadpath);
  console.log("request   : ", ctx.request.body);
  console.log("response      : ", ctx.body, '\n');
  console.log("================================\n");

}
