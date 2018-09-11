module.exports = function (mongoose) {
  const schema = mongoose.Schema({
    title: {
      type: String, //指定字段类型
      required: true, //判断数据是否必须（如果存在一条数据）
      unique: false //是否为不可重复
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
      type: String, //指定字段类型
      required: true, //判断数据是否必须（如果存在一条数据）
      unique: false,
    },
    likeCount: {
      type: String, //指定字段类型
      required: true, //判断数据是否必须（如果存在一条数据）
      unique: false,
    },
    readCount: {
      type: String, //指定字段类型
      required: true, //判断数据是否必须（如果存在一条数据）
      unique: false,
    },
    commentCount: {
      type: String, //指定字段类型
      required: true, //判断数据是否必须（如果存在一条数据）
      unique: false
    },
    comments: {
      type: Object, //指定字段类型
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
          reject(err)
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
  Article.myUpdate = (query, replace) => {
    return new Promise((resolve, reject) => {
      Article.update(query, replace, (err, res) => {
        if (!err) {
          resolve(res && res.ok > 0 && "更新成功")
        } else {
          reject('更新失败')
        }
      })
    })
  } 

  return Article //第一个变量是数据库表名，第二个是使用的模板
}
