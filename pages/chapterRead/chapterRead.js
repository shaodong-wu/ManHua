const {
  getChapterInfo,
  getChapterList
} = require('../../services/chapterInfo');
const {
  throttle
} = require('../../utils/function-utils');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    chapterInfo: null,
    chapterList: [],
    imageViewsList: [],
    chapterIndex: 0,
    hasReadChapterList: [],
    isShowMenu: false,
    isShowCatalogue: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (params) {
    // const { comic_id, chapter_newid } = {
    //   comic_id: '108645',
    //   chapter_newid: 'yugao-1625536100021'
    // };
    const { comicId, chapterNewid } = params;
    const self = this;
    Promise.all([getChapterInfo(comicId, chapterNewid, 'high'), getChapterList(comicId)])
      .then(result => {
        const currentChapter = {
          chapterId: result[0].current_chapter.chapter_id,
          chapterImgList: result[0].current_chapter.chapter_img_list
        };
        self.setData({
          chapterInfo: result[0],
          chapterList: result[1].reverse(),
          imageViewsList: [...self.data.imageViewsList, currentChapter]
        });
      });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // this.createIntersectionObserver()
    // .relativeToViewport({ top: 300 })
    // .observe(".chapter", rect => {
    //   console.log(rect.dataset.title);
    // });
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  scrollToLowerHandle: throttle(function () {
    const comicId = this.data.chapterInfo.comic_id;
    const chapterList = this.data.chapterList;
    const nextChapterIndex = this.data.chapterIndex + 1;
    const self = this;
    getChapterInfo(comicId, chapterList[nextChapterIndex].chapter_newid, 'high')
      .then(chapterInfo => {
        const currentChapter = {
          chapterId: chapterInfo.current_chapter.chapter_id,
          chapterImgList: chapterInfo.current_chapter.chapter_img_list
        };
        self.setData({
          chapterInfo: chapterInfo,
          chapterIndex: nextChapterIndex,
          imageViewsList: [...self.data.imageViewsList, currentChapter]
        });
      });
  }, 500),

  showMenuHandle: function () {
    const isShowMenu = this.data.isShowMenu;
    this.setData({ isShowMenu: !isShowMenu });
    wx.setNavigationBarColor({
      frontColor: !isShowMenu ? '#000000' : '#ffffff',
      backgroundColor: '#ffffff'
    });
  },

  showSideCatalogueHandle: function () {
    this.setData({
      isShowMenu: false,
      isShowCatalogue: true
    });
  },

  closeSideCatalogueHandle: function () {
    this.setData({ isShowCatalogue: false });
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#ffffff'
    });
  },

  returnUpLevelHandle: function () {
    wx.navigateBack({
      delta: 1
    });
  }
});
