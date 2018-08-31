module.exports = function (mongoose) {
    const schema = mongoose.Schema({
      session: {
        type: String, //指定字段类型
        required: true, //判断数据是否必须（如果存在一条数据）
        unique: true, //是否为不可重复
        expires: '1d',
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
    
    const Session = mongoose.model('Session', schema);
  
    Session.myFind = (args) => {
      return new Promise((resolve, reject) => {
        Session.find(args, (err, docs) => {
          if (!err) {
            resolve(docs)
          } else {
            reject('查找失败')
          }
        })
      })
    }
    return Session//第一个变量是数据库表名，第二个是使用的模板
  }
  