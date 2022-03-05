const {
  getComicInfoBody,
  getComicInfoRole,
  getComicInfoInfluence
} = require('../../services/bookDetails');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    comicId: 0,
    comicDetails: {},
    comicRole: [],
    comicInfluence: {},
    isHideLoading: false,
    isShowInfluence: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (params) {
    const { comicId } = params;
    const self = this;
    Promise.all([getComicInfoBody(comicId), getComicInfoRole(comicId), getComicInfoInfluence(comicId)])
      .then(res => {
        self.setData({
          comicId: comicId,
          comicDetails: res[0],
          comicRole: res[1],
          comicInfluence: res[2]
        });
      });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const self = this;
    setTimeout(function () {
      self.setData({ isHideLoading: true });
    }, 450);
  },

  startReadingHandle: function () {
    const comicId = this.data.comicId;
    const chapterList = this.data.comicDetails.comic_chapter;
    wx.navigateTo({
      url: `/pages/chapterRead/chapterRead?comicId=${comicId}&chapterNewid=${chapterList[chapterList.length - 1].chapter_id}`
    });
  },

  showInfluenceHandle: function () {
    this.setData({ isShowInfluence: !this.data.isShowInfluence });
  },

  returnUpLevelHandle: function () {
    wx.navigateBack({
      delta: 1
    });
  }
});
