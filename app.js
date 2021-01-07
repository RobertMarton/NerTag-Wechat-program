//app.js

App({
  onLaunch: function () {
    // console.log("global:", this.globalData.qqs)
    wx.cloud.init({
      env:"kai-g0dd3"
    })
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res)
      }
    })
    // // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo
    //           console.log(res.userInfo.nickName)
              
    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },

//   getUserInfo: function (cb) {
//     var that = this
//     if (this.globalData.userInfo) {
//         typeof cb == "function" && cb(this.globalData.userInfo)
//     } else {
//         wx.getUserInfo({
//             success: function (res) {
//                 console.log('用户信息', res.userInfo)
//                 that.globalData.userInfo = res.userInfo
//                 typeof cb == "function" && cb(that.globalData.userInfo)
//             }
//         })
//     }
// },

  // globalData: {
  //   name: 'df ',
  //   qqs: "ttt"
  // }
})
    // globalData: {
    //   qs: " ";
    //   qqs: "12312vc "}
      // host: 'https://api-xcx-qunsou.weiyoubot.cn/xcx',
      // // 版本升级时这里的version加1并替换versionFeature的文案即可
      // version: 2,
      // versionFeature: '更新说明'
    //}

  // var user = new Bmob.User();//开始注册用户

  //   
  
  //   if (!newOpenid) {
  //     wx.login({
  //       success: function (res) {
  //         user.loginWithWeapp(res.code).then(function (user) {
  //           var openid = user.get("authData").weapp.openid;
  //           console.log(user, 'user', user.id, res);

  //           if (user.get("nickName")) {
  //             // 第二次访问
  //             console.log(user.get("nickName"), 'res.get("nickName")');

  //             wx.setStorageSync('openid', openid)
  //           } else {
  //             var User = Bmob.Object.extend("_User");
  //             var queryUser = new Bmob.Query(User);
  //             queryUser.get(user.id, {
  //               success: function (result) {
  //                 result.set("register", false);
  //                 result.save();

  //               },
  //               error: function (result, error) {
      
  //               }
  //             });
              

  //             //保存用户其他信息
  //             wx.getUserInfo({
  //               success: function (result) {

  //                 var userInfo = result.userInfo;
  //                 var nickName = userInfo.nickName;
  //                 var userPic = userInfo.avatarUrl;
  //                 console.log()
  //                 var u = Bmob.Object.extend("_User");
  //                 var query = new Bmob.Query(u);
  //                 // 这个 id 是要修改条目的 id，你在生成这个存储并成功时可以获取到，请看前面的文档
  //                 query.get(user.id, {
  //                   success: function (result) {
  //                     // 自动绑定之前的账号

  //                     result.set('nickName', nickName);
  //                     result.set("userPic", userPic);
  //                     result.set("openid", openid);
  //                     result.save();

  //                   }
  //                 });

  //               }
  //             });


  //           }

  //         }, function (err) {
  //           console.log(err, 'errr');
  //         });

  //       }
  //     });
  //   }



  // },
  // getUserInfo: function (cb) {
  //   var that = this
  //   if (this.globalData.userInfo) {
  //     typeof cb == "function" && cb(this.globalData.userInfo)
  //   } else {
  //     //调用登录接口
  //     wx.login({
  //       success: function () {

  //         wx.getUserInfo({
  //           success: function (res) {
  //             that.globalData.userInfo = res.userInfo
  //             typeof cb == "function" && cb(that.globalData.userInfo)
  //           }
  //         })
  //       }
  //     })
  //   }
  // },
  // globalData: { 
  //   userInfo: null,
  //   singleChoiceAnswerNow:[],
  //   multiChoiceAnswerNow: [],
  //   choseQuestionBank:'',
  //   score:0

  // }
//})

