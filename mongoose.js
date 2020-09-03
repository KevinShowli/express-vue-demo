const mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 连接数据库，数据库不需要存在，在插入第一条数据时会自动创建
mongoose.connect('mongodb://localhost:27017/User', {useNewUrlParser: true, useUnifiedTopology: true});
// 设计集合结构
var userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  passwd: {
    type: String,
    required: true
  },
  email: {
    type: String
  }
});

// 将文档结构发布为一个模型：
// 第一个参数： 大写的名词单数，表示数据库名称
// mongoose 会自动生成小写的名词复数，作为集合名称
const User = mongoose.model('User', userSchema);

// const admin = new User({
//   username: 'liukai',
//   passwd: '123123',
//   email: 'www.abcn.com'
// });
// admin.save().then(() => console.log('success')).catch((e) => {console.log('feaild');});

// User.find().then(res => {
//   console.log(res);
// })

// User.findOne({
//   email: 'www.abcn.com'
// }).then(res => {
//   console.log(res);
// })

// User.remove({
//   username: 'liukai'
// }, (err, res) => {
//   if (err) {
//     console.log('feail');

//   } else {
//     console.log('success');
//   }
// })


