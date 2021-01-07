// pages/demosc/demosc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    label:"",
    arr: [{
      value: '长按，上侧复制',
      placement: 'top'
    },
    {
      value: '长按，右侧复制',
      placement: 'right'
    },
    {
      value: '长按，左侧复制',
      placement: 'left'
    },
    {
      value: '长按，下侧复制',
      placement: 'bottom'
    }]
,
    array: ['ASM', 'O', 'DN', 'LP', 'LSP'],
   index: 0,
    value:"这是要复制的内容！",
    scTitle: "锄禾日当午",
    bookcode:"本院认为：债是按照合同的约定或者依照法律的规定，在当事人之间产生的特定的权利和义务关系。本案中，原告左法明与被告王振宇之间的借款关系，原告左法明提供了借条、证人证言以及本人的陈述，能够证明被告王振宇向其借款6万元且至今未还的事实；被告王振宇不到庭答辩，放弃了对原告左法明主张的抗辩权，也未提供推翻借款事实的相反证据，故对原告左法明要求被告王振宇归还借款6万元的主张本院予以支持。故此，依照《中华人民共和国民法通则》第八十四条、第八十八条第一款、第二款第（二）项、第一百零八条以及《中华人民共和国民事诉讼法》第一百四十四条之规定，判决如下：",
    scEmptyBtns:[
      {text:"",index:0},
      {text:"",index:1},
      {text:"",index:2},
      {text:"",index:3},
      {text:"",index:4},      
    ],
    words:[
      "我","汗","滴","禾","下","土","是"
    ],
  },
  textInput:function(e){
    let that = this
    var tmpdata = that.data.bookcode
    if(target){
      tmpdata = target
    }
    var replaced = e.detail.value
    var label = that.data.array[that.data.index]
    console.log("tmpdata:", tmpdata)
    // var tmpdata.replace(replaced, label)
    // var content = that.data.bookcode + '/' + that.data.array[that.data.index]
    // var str = "sdfdf"
    var n = tmpdata.valueOf()
    var val_rep = replaced.valueOf()
    console.log("val_rep:", val_rep)

    var pattern = val_rep
    var toPlaced = val_rep + "\/" + label.valueOf()
    var target = n.replace(pattern, toPlaced)
    // var n = " 本院认为：债是按照合同的约定或者依照法律的规定，在当事人之间产生的特定的权利和义务关系。本案中，原告左法明与被告王振宇之间的借款关系，原告左法明提供了借条、证人证言以及本人的陈述，能够证明被告王振宇向其借款6万元且至今未还的事实；被告王振宇不到庭答辩，放弃了对原告左法明主张的抗辩权，也未提供推翻借款事实的相反证据，故对原告左法明要求被告王振宇归还借款6万元的主张本院予以支持。故此，依照《中华人民共和国民法通则》第八十四条、第八十八条第一款、第二款第（二）项、第一百零八条以及《中华人民共和国民事诉讼法》第一百四十四条之规定，判决如下"
    // var  val_rep = /6万元/gi
    // var toPlaced = val_rep + "\/"+"ASM"
    // var target = n.replace(val_rep, toPlaced)
    console.log("n:",n, "target:", target)


    this.setData({
      bookcode: target,
      info: target
    })
  },
  bindFormSubmit: function(e) {
    let that = this
    // e.detail.value = that.data.bookcode + that.data.array[that.data.index]
    console.log("光标位置:", e.detail,that.data.bookcode, that.data.array[that.data.index])
  },
  bindTextAreaBlur: function(e) {
    console.log(e.detail.value)
    // console.log("光标位置:", selection-start)
  },
  // handleTap(e) {
  //   this.setData({ evt: e })
  // },

  listenerPickerSelected: function(e) {
    let that = this
    //改变index值，通过setData()方法重绘界面
    this.setData({
    index: e.detail.value
    });
    let label = that.data.array[e.detail.value]
    console.log("label成功:", label)
   }, 
  copy:function(e){
    var code = e.currentTarget.dataset.copy;
    wx.setClipboardData({
      data: code,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
        });
      },
      fail:function(res){
        wx.showToast({
          title: '复制失败',
        });
      }
    })
  },
    // 点击待选择的汉字
    handleClickWord:function(e){
      console.log("-------")
      console.log(e.currentTarget.dataset.w)
      
      let fullFlag = true
      let curWord = e.currentTarget.dataset.w
      for(var i=0; i < this.data.scEmptyBtns.length; i++){
        if(this.data.scEmptyBtns[i].text == ""){
          this.data.scEmptyBtns[i].text = curWord
          if (i<4){
            fullFlag = false
          }
          break;
        }
      } 

      if (fullFlag){
        let anwser = ""
        for(var i=0; i < this.data.scEmptyBtns.length; i++){
          anwser += this.data.scEmptyBtns[i].text
        } 
        if (anwser=="汗滴禾下土"){
          wx.showToast({
            title: '回答正确',
          })
        }
        else{
          wx.showToast({
            title: '回答错误',
          })
        }
      }
      this.setData({
        scEmptyBtns:this.data.scEmptyBtns
      })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
onCopy(e) {
    console.log('onCopy', e)
  },
  
  handleTouchStart(e) {
    console.log('@@ touchstart', e)
  },

  handleTap(e) {
    console.log('@@ tap', e)
    this.setData({
      evt: e
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})