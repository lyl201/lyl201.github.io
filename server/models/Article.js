const {schemaPromisify} = require('../utils');
module.exports = function (mongoose) {
    const schema = schemaPromisify(mongoose, {
        title: {
            type: String,
            required: true, 
            unique: false
        },
        summary: {
            type: String, 
            required: true, 
            unique: false
        },
        content: {
            type: String,
            required: true,
        },
        image: {
            type: String, 
            required: true,
            unique: false
        },
        tag: {
            type: String,
            required: true, 
            unique: false
        },

        date: {
            type: String, 
            required: true,
            unique: false
        },
        likeCount: {
            type: String,
            required: true,
            unique: false
        },
        readCount: {
            type: String,
            required: true,
            unique: false
        },
        commentCount: {
            type: String,
            required: true,
            unique: false
        },
        comments: {
            type: Object,
            required: false,
            unique: false
        }
    })

    const Article = mongoose.model('Article', schema);

    return Article;
}
