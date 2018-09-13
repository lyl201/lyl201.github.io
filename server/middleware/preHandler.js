module.exports = preHandler = () => {
    return async(ctx, next) => {
        await next();
        ctx.type = "application/json; charset=UTF-8";
        ctx.set("Access-Control-Allow-Credentials", "true");
        ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
    }
}
