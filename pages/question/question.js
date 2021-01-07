// pages/question/question.js
// pages/sequence/sequence.js
var qs = require('../resource/res.js')
var QC = new require('../utils/question_control.js')
var questioncontrol = QC.questionControl
const db = wx.cloud.database().collection("lawDb")
let id = ""
let toDeltoken = ""
Page({


  /**
   * 页面的初始数据
   */
  data: {
    questions: qs.questions,
    bookcode: qs.questions,
    // bookcode: qs.questions,
    array: ['ASM', 'O', 'DN', 'LP', 'LSP'],
    index: 0
  },


  // 要删除的id
  delDataInput(event){
    console.log("要删除的id",event.detail.value)
    id = event.detail.value
  },
  // 要更新的id
  udpDataInput(event){
      console.log("要更新的id",event.detail.value)
      id = event.detail.value
  },
    // 要更新的label
  udpLabel(event){
    let that = this
    var toAddLabel = []
    toAddLabel.push(event.detail.value)
    console.log("原始的Label",that.data.array)
    var target = that.data.array.concat(toAddLabel)
    this.setData({
      array: target
      });
      console.log("要添加的Label",event.detail.value, target, that.data.array)

  },
   // 要更新的age
   udpAge(event){
    toDeltoken = event.detail.value
  }, 
  // 修改数据
  udpData(){
    db.doc(id).update({
      data:{
        stem:toDeltoken
      },
      success(res){
        console.log("更新成功", res)
      },
      fail(res){
        console.log("更新失败", res)
      }
    })
  },
   // 查询数据
   getData(){
    db.get({
      success(res){
        console.log("查询数据成功", res)
      }
    })
  }, 
  // 删除数据
  delData(){
    db.doc(id).remove({
      success(res){
        console.log("删除成功", res)
      },
      fail(res){
        console.log("删除失败", res)
      }
    })
  },
  // 添加label数据
  addData(){
    // console.log("openId获取成功", this.data.openid, this.userList),
    db.add({
      data:{
        stem:this.__data__.question.stem
      },

    success(res){
      console.log("上传成功", res)
      console.log("openId获取成功", this.data.openid)

    },
    fail(res){
      console.log("上传失败", res)
    }})
  },
  textInput:function(e){
    let that = this
    that.data.bookcode = this.__data__.question.stem
    console.log("修改了吗:", that.data.bookcode )
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
    console.log("toPlaced:", toPlaced)
    // var n = " 本院认为：债是按照合同的约定或者依照法律的规定，在当事人之间产生的特定的权利和义务关系。本案中，原告左法明与被告王振宇之间的借款关系，原告左法明提供了借条、证人证言以及本人的陈述，能够证明被告王振宇向其借款6万元且至今未还的事实；被告王振宇不到庭答辩，放弃了对原告左法明主张的抗辩权，也未提供推翻借款事实的相反证据，故对原告左法明要求被告王振宇归还借款6万元的主张本院予以支持。故此，依照《中华人民共和国民法通则》第八十四条、第八十八条第一款、第二款第（二）项、第一百零八条以及《中华人民共和国民事诉讼法》第一百四十四条之规定，判决如下"
    // var  val_rep = /6万元/gi
    // var toPlaced = val_rep + "\/"+"ASM"
    // var target = n.replace(val_rep, toPlaced)
    console.log("n:",n, "target:", target)
    this.__data__.question.stem=target

    this.setData({
      bookcode: target,
      info: target
    })
  },
  listenerPickerSelected: function(e) {
    let that = this
    //改变index值，通过setData()方法重绘界面
    this.setData({
    index: e.detail.value
    });
    let label = that.data.array[e.detail.value]
    console.log("label成功:", label)
   }, 
  onLoad: function (options) {
    // this.getOpenid();
    let that = this
    const self = this
    // console.log("getDatatmp:", datalist)
    // that.questions = datalist
    // that.setData({questions: datalist})

    const t = options.type
    this.setData({learning_type: t})
    // let questions = this.loadQuestions().questions
    let view_list = wx.getStorageSync(t + 'list')
    let favorite_list = wx.getStorageSync('favorite_list')
    // let multiUserLabeled_list = wx.getStorageSync('multiUserLabeled_list')
    if (favorite_list){
      favorite_list = favorite_list.split(',').map(x => parseInt(x))
      questioncontrol.setFavoriteList(favorite_list)
    }
    if (t == 'favorite') {
      questioncontrol.view_list = favorite_list
      questioncontrol.vid = -1
      self.nextQuestion()
      return
    }
    let wrong_list = wx.getStorageSync('wrong_list')
    if (wrong_list){
      wrong_list = wrong_list.split(',').map(x => parseInt(x))
      questioncontrol.setWrongList(wrong_list)
    }

    let vid = wx.getStorageSync(t+'vid')
    console.log("t:", t, "vid:", vid)
    console.log("getintoData:", this.questions)

    if (vid){
      vid = parseInt(vid)
    }else{
      vid = 0
    }

    if (vid>1){
      view_list = view_list.split(',').map(x => parseInt(x))
      wx.showModal({
        title: '是否继续标注',
        content: '上次你标注到' + (vid+1) + '个问题，是否继续？',
        success: function (res) {
          if (res.confirm) {
            questioncontrol.vid = vid - 1
            questioncontrol.view_list = view_list
            self.nextQuestion()
          } 
          else{
            questioncontrol.vid = -1
            questioncontrol.view_list = self.generateList(t, questioncontrol.getQuestionCount())
            self.nextQuestion()
          }
        },
        fail: function () {

        }
      })
    }else{
      questioncontrol.vid = -1
      questioncontrol.view_list = self.generateList(t, questioncontrol.getQuestionCount())
      self.nextQuestion()
    }

  },
  generateList: function(t, count){
    var list = [];
    for (var i = 0; i < count; i++) {
      list.push(i);
    }
    if (t=='random'){
      list = this.shuffle(list)
    }
    return list
},


shuffle: function (a) {
  for(let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
},
namedQuestion: function(e){
  if(questioncontrol.finishedYet()){
    wx.showModal({
      title: 'Congratulations!',
      content: '全部标完了',
    })
    return
  }
  let that = this
    //改变index值，通过setData()方法重绘界面
    this.setData({
    index: e.detail.value
    });
    let label = that.data.array[e.detail.value]
    console.log("label成功:", e.detail.value)

  let question = questioncontrol.getNextQuestion(e.detail.value)
  let favorite = questioncontrol.isFavorite()
  // let isMultiUser = questioncontrol.isMultiUserLabled()

  this.setNewQuestion(question, favorite)
},

nextQuestion: function(){
  this.setData({
    info: "",
    val_rep: ""
  })
  if(questioncontrol.finishedYet()){
    wx.showModal({
      title: 'Congratulations!',
      content: '全部标完了',
    })
    return
  }
  let question = questioncontrol.getNextQuestion()
  let favorite = questioncontrol.isFavorite()
  // let isMultiUser = questioncontrol.isMultiUserLabled()

  this.setNewQuestion(question, favorite)
},
previousQuestion: function () {
  this.setData({
    info: "",
    val_rep: ""
  })
  let question = questioncontrol.getPreviousQuestion()
  let favorite = questioncontrol.isFavorite()
  // let isMultiUser = questioncontrol.isMultiUserLabled()
  this.setNewQuestion(question, favorite)
},
setNewQuestion: function(question, favorite){
  this.setData({
    question: question,
    answer: question.answer,
    // MultiUser: favorite,
    favorite: favorite,
    correctid: '',
    wrongid: '',
    disable: '',
    pending: false
    })
},
selectAnswer: function(evt){
  self = this
  let selected = evt.currentTarget.dataset.id
  let act = this.data.answer
  console.log("每个输出:",this.__data__.question.stem,"user选择:", evt.currentTarget.dataset )
  if (selected == act){
    this.setData({
      correctid: selected,
      disable: 'disabled',
      pending: true
    })
    setTimeout(function(){
      self.nextQuestion()
    }, 1000)
  }
  else{
    this.setData({wrongid: selected})
  }
},    
addFavorite: function(){
  let isFavorite = questioncontrol.toggleFavorite()
  this.setData({ favorite: isFavorite})

  // let isMultiUser = questioncontrol.toggleFavorite()
  this.setData({ MultiUser: isFavorite})
  

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
    var animation = wx.createAnimation({
      duration: 100,
      timingFunction: 'ease',
    })

    this.animation = animation

    animation.translate(10).step()
    animation.translate(-10).step()
    animation.translate(0).step()

    this.setData({
      animationData: animation.export()
    })
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
    let t = this.data.learning_type
    if(questioncontrol.finishedYet()){
      wx.removeStorageSync(t + 'list')
      wx.removeStorageSync(t + 'vid')
      wx.setStorageSync('favorite_list', [...questioncontrol.favorite_list].toString())
      return
    }
    wx.setStorageSync(t + 'list', questioncontrol.view_list.toString())
    wx.setStorageSync(t+'vid',questioncontrol.vid)
    wx.setStorageSync('favorite_list', [...questioncontrol.favorite_list].toString())
    return
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