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
    },
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

  User.myFind = (query) => {
    return new Promise((resolve, reject) => {
      User.find(query, (err, docs) => {
        if (!err) {
          resolve(docs)
        } else {
          reject('查找失败')
        }
      })
    })
  }

  User.myUpdate = (query, replace) => {
    return new Promise((resolve, reject) => {
      User.update(query, replace, (err, res) => {
        if (!err) {
          resolve(res && res.ok > 0 && "更新成功")
        } else {
          reject('更新失败')
        }
      })
    })
  } 
  return User//第一个变量是数据库表名，第二个是使用的模板
}
