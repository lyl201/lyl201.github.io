const Koa = require('koa');
const app = new Koa();
const githubAsImageServer = require('github-as-image-server');
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  next();
})
app.use(
  githubAsImageServer({
    targetDir: 'D:/project/silentport.github.io', // github.io仓库的本地地址
    repo: 'https://github.com/silentport/silentport.github.io.git', // github.io仓库的远程地址
    url: 'https://silentport.github.io', // 你的github.io域名
    dir: 'upload', // 图片文件的上传目录
    project: 'blog', // 项目名，用于指定一个上传子目录
    router: '/upload', // 请求路由，请求非该指定路由时中间件将跳过
  })
);

app.listen(8000, () => {
  console.log('server is started at 8000!');
})