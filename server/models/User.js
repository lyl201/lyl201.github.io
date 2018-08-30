module.exports = function (mongoose) {
  const schema = mongoose.Schema({
    username: {
      type: String, //指定字段类型
      required: true, //判断数据是否必须（如果存在一条数据）
      unique: true //是否为不可重复
    },
    password: {
      type: String
    },
    avator: {
      type: String
    }
  });
  schema.methods.mySave = function () {
    
    return new Promise((resolve, reject) => {    
      this.save(err => {
        if (!err) {
          resolve('该用户信息已存入数据库')
        } else {
          reject('保存失败')
        }
      })
    })
  }
  
  const User = mongoose.model('User', schema);

  User.myFind = (args) => {
    return new Promise((resolve, reject) => {
      User.find(args, (err, docs) => {
        if (!err) {
          resolve(docs)
        } else {
          reject('查找失败')
        }
      })
    })
  }
  return User//第一个变量是数据库表名，第二个是使用的模板
}
