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
  return mongoose.model('User', schema); //第一个变量是数据库表名，第二个是使用的模板
}
