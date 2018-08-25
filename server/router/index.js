const Router = require('koa-router');

const koaBody = require('koa-body');


const router = new Router();

router.get('/', (ctx, next) => {
    ctx.type = 'application/json; charset=UTF-8'
    console.log(ctx.path)
    ctx.body = {
        a: 'uuuu'
    }
}) 
router.post('/register', (ctx, next) => {
    ctx.type = 'application/json; charset=UTF-8'
    console.log(ctx.path)
    console.log(ctx.uploadpath);
    console.log(ctx.request.body)
    ctx.body = ctx.request.body
}) 


router.post('/upload', (ctx, next) => {
    console.log(ctx.uploadpath);
    
    ctx.body = ctx.uploadpath
})
module.exports = {router, koaBody}