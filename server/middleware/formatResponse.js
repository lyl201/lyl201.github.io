module.exports = formatResponse = (app) => {
    return (ctx, next) => {
        ctx.type = "application/json; charset=UTF-8";
        ctx.body = {
            info: {
                msg: ctx.state.msg,
                status: ctx.state.status
            },
            head: {
                msg: ctx.message,
                code: ctx.status,
            },
            data: ctx.body || null,
        }
    }
}