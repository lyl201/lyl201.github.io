const Koa = require('koa');
const path = require('path');
const cors = require('koa2-cors');
const Static = require('koa-static');
const mongoose = require('mongoose');
const router  = require('./router');
const session = require('koa-session2');
const formatResponse = require('./middleware/formatResponse')
const fileUpload = require('./middleware/fileUpload');
const app = new Koa();


 



const db = require('./config').db;

mongoose.connect(db, { useNewUrlParser: true });

const con = mongoose.connection;

con.once('open', () => {
  
  console.log("数据库已成功连接");
  const models = require('./models')(mongoose);
   
  app.context.models = models;  //将模型的信息放到app中。

  // 支持跨域
  app.use(cors());
  // 保持登录
  app.use(session({
    key: 'SESSION',
  }));
  // 支持二进制文件上传
  app.use(fileUpload(app))
  // 支持处理静态文件
  app.use(Static(path.join(__dirname, 'public/upload')))
  // 支持路由
  app.use(router.routes());
  // 响应格式化
  app.use(formatResponse())
})

con.on('error', console.error.bind(console, '连接数据库失败'));

app.listen(3000, () => {
  console.log("服务器已启动");
});



