module.exports = function (mongoose) {
  const schema = mongoose.Schema({
    title: {
      type: String, //指定字段类型
      required: true, //判断数据是否必须（如果存在一条数据）
      unique: true //是否为不可重复
    },
    summary: {
      type: String, //指定字段类型
      required: true, //判断数据是否必须（如果存在一条数据）
      unique: false
    },
    content: {
      type: String, //指定字段类型
      required: true, //判断数据是否必须（如果存在一条数据）
      unique: false
    },
    image: {
      type: String, //指定字段类型
      required: true, //判断数据是否必须（如果存在一条数据）
      unique: false
    },
    tag: {
      type: String, //指定字段类型
      required: true, //判断数据是否必须（如果存在一条数据）
      unique: false,
    },

    date: {
      type: Number, //指定字段类型
      required: true, //判断数据是否必须（如果存在一条数据）
      unique: false,
    },
    likeCount: {
      type: Number, //指定字段类型
      required: true, //判断数据是否必须（如果存在一条数据）
      unique: false,
    },
    readCount: {
      type: Number, //指定字段类型
      required: true, //判断数据是否必须（如果存在一条数据）
      unique: false,
    },
    commentCount: {
      type: Number, //指定字段类型
      required: true, //判断数据是否必须（如果存在一条数据）
      unique: false
    },
    comments: {
      type: Number, //指定字段类型
      required: false, //判断数据是否必须（如果存在一条数据）
      unique: false
    }

  });
  schema.methods.mySave = function () {

    return new Promise((resolve, reject) => {
      this.save(err => {
        if (!err) {
          resolve('该类别已存入数据库')
        } else {
          reject('保存失败')
        }
      })
    })
  }


  const Article = mongoose.model('Article', schema);

  Article.myFind = (args) => {
    return new Promise((resolve, reject) => {
      Article.find(args, (err, docs) => {
        if (!err) {
          resolve(docs)
        } else {
          reject('查找失败')
        }
      })
    })
  }

  Article.myRemove = (args) => {
    return new Promise((resolve, reject) => {
      Article.remove(args, (err) => {
        if (!err) {
          resolve('删除成功')
        } else {
          reject('删除失败')
        }
      })
    })
  }

  return Article //第一个变量是数据库表名，第二个是使用的模板
}
