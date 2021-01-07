// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:"kai-g0dd3"
})

// 云函数入口函数
exports.main = async (event, context) => {
  return cloud.database().collection("users").get({
    success(res){
      return res
    },
    fail(err){
      return err
    }
  })
}