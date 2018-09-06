module.exports = function (mongoose) {
  const schema = mongoose.Schema({
    name: {
      type: String, //指定字段类型
      required: true, //判断数据是否必须（如果存在一条数据）
      unique: true //是否为不可重复
    },
    date: {
      type: Number, //指定字段类型
      required: true, //判断数据是否必须（如果存在一条数据）
      unique: true
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


  const Catagory = mongoose.model('Catagory', schema);

  Catagory.myFind = (args) => {
    return new Promise((resolve, reject) => {
      Catagory.find(args, (err, docs) => {
        if (!err) {
          resolve(docs)
        } else {
          reject('查找失败')
        }
      })
    })
  }

  Catagory.myRemove = (args) => {
    return new Promise((resolve, reject) => {
      Catagory.remove(args, (err) => {
        if (!err) {
          resolve('删除成功')
        } else {
          reject('删除失败')
        }
      })
    })
  }

  return Catagory //第一个变量是数据库表名，第二个是使用的模板
}
