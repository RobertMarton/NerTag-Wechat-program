
Page({

  data:{
    datalist:[]
  },
  //事件处理函数
  bindSequence: function() {
    wx.navigateTo({
      url: '../question/question?type=sequence'
    })
  },
  // 获取云数据库数据
  getData(){
    let that = this
    wx.cloud.database().collection("userList").get({
      success(res){
        console.log("请求成功", res)
        that.setData({
          datalist:res.data
        })
      },
      fail(res){
        console.log("请求失败", res)
      }
    })
  }
})

