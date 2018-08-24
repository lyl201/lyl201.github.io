const Router = require('koa-router');

const router = new Router();

router.get('/', (ctx, next) => {
    ctx.type = 'application/json; charset=UTF-8'
    console.log(ctx.path)
    ctx.body = {
        a: 'uuuu'
    }
}) 

module.exports = router