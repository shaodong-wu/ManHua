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
    const { comic_id } = params;
    const self = this;
    Promise.all([getComicInfoBody(comic_id), getComicInfoRole(comic_id), getComicInfoInfluence(comic_id)])
    .then(res => {
      self.setData({
        comicId: comic_id,
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
      url: `/pages/chapterRead/chapterRead?comic_id=${comicId}&chapter_newid=${chapterList[chapterList.length-1].chapter_id}`
    });
  },

  showInfluenceHandle: function () {
    this.setData({ isShowInfluence: !this.data.isShowInfluence });
  },

  returnUpLevelHandle: function () {
    wx.navigateBack({
      delta: 1
    })
  }
})