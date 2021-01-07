let qqs = ""
// let datalist = []
var qs = require('../resource/res.js')
Page({
  // data:{
  //   datalist:[]
  // },

  data: {
    // datalist:[],
    questions: qs.questions,
    bookcode: qs.questions,
    array: ['ASM', 'O', 'DN', 'LP', 'LSP'],
    index: 0
  },
  about: function(){
    wx.navigateTo({
      url: '../about/about'
    })
  },
  bindRandom: function () {
    wx.navigateTo({
      url: '../question/question?type=random'
    })
  },
  bindFavorite: function () {
    let favorite_list = wx.getStorageSync('favorite_list')
    if (!favorite_list) {
      wx.showModal({
        title: 'Oops!',
        content: '你没有收藏的问题'
      })
      return
    }
    wx.navigateTo({
      url: '../question/question?type=favorite'
    })
  },

  //事件处理函数
  bindSequence: function() {
    // this.authenFile();
    
    wx.navigateTo({
      url: '../question/question?type=sequence',
      // datalist: datalist
    })
  },
  // 数据库api获取数据
  shujuku(){
    wx.cloud.database().collection("users").get({
      success(res){
        console.log("数据库获取成功", res)
        that.setData({
          datalist:res.result.data
        })
      },
      fail(res){
        console.log("数据库获取失败", res)
      },
    })
  },
  // 获取云数据库数据
  getData(){
    let that = this
    wx.cloud.callFunction({
      name:"getList",
      success(res){
        console.log("请求云函数成功", res)
        that.setData({
          datalist:res.result.data
        })
      },
      fail(res){
        console.log("请求云函数失败", res)

      }
    })
  }
})

