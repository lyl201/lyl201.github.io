'use strict';
const Koa = require('koa')
const mongoose = require('mongoose');
const cors = require('koa2-cors');
const Static = require('koa-static');
const path = require('path')
const fs = require('fs')
const {
  router,
  koaBody
} = require('./router/index')
mongoose.connect('mongodb://localhost:27017/blog', {
  useNewUrlParser: true
});
const con = mongoose.connection;
con.on('error', console.error.bind(console, '连接数据库失败'));
con.once('open', () => {
  // 成功连接
  console.log("success")
  const app = new Koa();
  // 支持跨域
  app.use(cors())
  // 支持二进制文件上传
  app.use(koaBody({
    multipart:true, // 支持文件上传
    encoding:'gzip',
    formidable:{
      uploadDir:path.join(__dirname,'public/upload/'), // 设置文件上传目录
      keepExtensions: true,    // 保持文件的后缀
      maxFieldsSize:2 * 1024 * 1024, // 文件上传大小
      onFileBegin:(name, file) => { // 文件上传前的设置
        function getUploadFileExt(name) {
          let ext = name.split('.');
          return ext[ext.length - 1];
        }
        const ext =getUploadFileExt(file.name);
        const dir = path.join(__dirname,`public/upload/${name}`);
        if (!fs.existsSync(dir)){
          fs.mkdirSync(dir)
        }
        const fileName = new Date().getTime()
        file.path = `${dir}/${fileName}.${ext}`
        app.context.uploadpath = app.context.uploadpath ? app.context.uploadpath : {};
        app.context.uploadpath[name] = `http://localhost:3000/${name}/${fileName}.${ext}`;
      },
    }
  
  }))
  app.use(Static(path.join(__dirname, 'public/upload')))
  app.use(router.routes())
  app.listen(3000);

})
