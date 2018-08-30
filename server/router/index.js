const Router = require("koa-router");

const router = new Router();

// router.all(/\w+/, require('./all'));

router.get("/home", require('./home'))

router.post("/register", require('./register'));

router.post("/login", require('./login'));

router.post("/upload", async (ctx, next) => {

});
module.exports = router;
