module.exports = function (instance) {
    return {
        User: require('./User')(instance)
    }
}