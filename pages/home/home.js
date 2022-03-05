const { throttle } = require('../../utils/function-utils');
const { getRecommendList } = require('../../services/recommend');

const app = getApp();

const MAX_PAGE_NUMBER = 4;

Page({
  data: {
    coverHost: app.globalData.pathRules.book_cover_comic,
    slideList: [],
    comicList: [],
    curPageNum: 1,
    bookType: 132,
    isHidWait: false,
    isNoMore: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const self = this;
    const bookType = this.data.bookType;
    getRecommendList(1, bookType).then(comicList => {
      const slideInfo = comicList.splice(0, 1)[0].comic_info;
      const slideList = slideInfo.map(item => {
        const comicId = item.comic_id;
        const imgUrl = item.img_url;
        return { comicId, imgUrl };
      });
      self.setData({ slideList, comicList });
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const self = this;
    setTimeout(function () {
      self.setData({ isHidWait: true });
    }, 1000);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 添加选中效果
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      // 自定义组件的getTabBar 方法，可获取当前页面下的自定义 tabBar 组件实例。
      this.getTabBar().setData({
        selected: 2 // 这个是tabBar中当前页对应的下标
      });
    }
  },

  scrollToLowerHandle: throttle(function () {
    const self = this;
    let curPageNum = this.data.curPageNum;
    const comicList = this.data.comicList;
    const bookType = this.data.bookType;
    if (curPageNum < MAX_PAGE_NUMBER) {
      // 显示 Loading
      self.setData({
        isNoMore: false,
      });

      // 请求数据，并添加至 comicList
      getRecommendList(curPageNum + 1, bookType).then(result => {
        comicList.push(...result);
        curPageNum = curPageNum + 1;
        self.setData({ comicList, curPageNum });
      });
    } else {
      // 显示 底部 Tip
      this.setData({
        isNoMore: true,
      });
    }
  }, 500)
});
