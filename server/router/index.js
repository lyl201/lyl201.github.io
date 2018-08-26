const Router = require('koa-router');

const router = new Router();

router.get('/', async (ctx, next) => {
    ctx.type = 'application/json; charset=UTF-8'
    console.log(ctx.path)
    ctx.body = {
        a: 'uuuu'
    }
}) 
router.post('/register', async (ctx, next) => {
    ctx.type = 'application/json; charset=UTF-8'
    console.log(ctx.path)
    console.log(ctx.uploadpath);
    console.log(ctx.request.body);
    // const {username, password, avator} = ctx.request.body;
    const user = new ctx.app.models.User(ctx.request.body)

    user.save(err => {
        if(!err) {
            console.log("save success")
        }
    })
    ctx.body = ctx.request.body
}) 


router.post('/upload', async (ctx, next) => {
    console.log(ctx.uploadpath);
    
    ctx.body = ctx.uploadpath
})
module.exports = router