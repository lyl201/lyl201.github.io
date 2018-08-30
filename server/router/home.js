module.exports = async (ctx, next) => {
    console.log('session: ', ctx.session.user);
    ctx.body = {info: ctx.session.user};
    ctx.state.status = true;
    ctx.state.msg = 99
    next();
}