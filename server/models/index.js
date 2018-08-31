module.exports = function (instance) {
    return {
        User: require('./User')(instance),
        Session: require('./Session')(instance),
    }
}