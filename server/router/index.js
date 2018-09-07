const Router = require("koa-router");

const router = new Router();

router.all(/\w+/, require('./all'));

router.get("/home", require('./home'))

router.post("/register", require('./register'));

router.post("/login", require('./login'));

router.post("/catagory", require('./catagory_add'));

router.get("/catagory", require('./catagory_find'));

router.delete(/\/catagory\/.+/, require('./catagory_del'));

router.post("/article", require('./article'));

router.post("/upload/avator", require('./upload_avator'));

router.post("/upload/article", require('./upload_article'));

module.exports = router;
