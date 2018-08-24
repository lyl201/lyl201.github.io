'use strict';
const Koa = require('koa')
const mongoose = require('mongoose');
const cors = require('koa2-cors');
const router = require('./router/index')
mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true });
const con = mongoose.connection;
con.on('error', console.error.bind(console, '连接数据库失败'));
con.once('open',()=>{
    //成功连接
  console.log("success")
  const app = new Koa();
  app.use(cors())
  app.use(router.routes())  
  app.listen(3000);
  
})

