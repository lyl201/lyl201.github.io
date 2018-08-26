module.exports = function (instance) {
    return {
        User: require('./register')(instance)
    }
}