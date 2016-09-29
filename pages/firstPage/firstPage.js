//index.js
Page({
  data: {
    actionSheetHidden: true,
    actionSheetItems: ['我的位置', '网络状态', '待办']
  },
  actionSheetTap: function(e){
    console.log(this.data.actionSheetHidden);
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  actionSheetChange: function(e){
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  bindItemTap: function(e){
    var datasetName = e.currentTarget.dataset.name;
    if(datasetName == '我的位置'){
      wx.getLocation({
        type: 'gcj02',
        success: function(res){
          console.log(res.latitude);
          console.log(res.longitude)
        }
      })
    }else if(datasetName == '网络状态'){
      wx.getNetworkType({
        success: function(res){
          var networkType = res.networkType;
          console.log(networkType)
        }
      })
    }else if(datasetName == '待办'){
      wx.navigateTo({
        url: '../todo/todo'
      })
    }
  }
})
