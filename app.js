const configData = require('./data/configData');

App({
  onShow: function () {
    let self = this;
    wx.getSystemInfo({
      success: function (result) {
        self.globalData.windowWidth = result.windowWidth;
        self.globalData.windowHeight = result.windowHeight;
        self.globalData.statusBarHeight = result.statusBarHeight;
      }
    });
  },
  globalData: {
    windowWidth: 0,
    windowHeight: 0,
    statusBarHeight: 0,
    config: configData,
    pathRules: {
      image_domain: "https://image.yqmh.com",
      front_cover: "https://image.yqmh.com/mh/{0}.jpg",
      front_cover21: "https://image.yqmh.com/mh/{0}_2_1.jpg",
      chapter_cover: "https://image.yqmh.com/chapter_cover/{0}/{1}.jpg",
      news_cover: "https://image.mhxk.com/news/{0}/{1}.jpg",
      recommendpubclassimgurl: "https://image.mhxk.com/recommend/{0}.jpg",
      book_cover: "https://cms.samanlehua.com/cms/book/{0}.jpg",
      book_cover_comic: "https://cms.samanlehua.com/"
    },
    recommendApi: "https://cms-booklist.321mh.com/api/v1/bookList/getBookByType",
    updateApi: "https://www.kanman.com/api/updatelist",
    comicInfoBodyApi: "https://getcomicinfo-globalapi.yyhao.com/app_api/v5/getcomicinfo_body",
    comicInfoRoleApi: "https://www.kanman.com/api/getcomicinfo_role",
    comicInfoInfluenceApi: "https://comic.321mh.com/app_api/v5/getcomicinfo_influence",
    chapterInfoApi: "https://www.kanman.com/api/getchapterinfov2",
    chapterListApi: "https://www.kanman.com/api/getchapterlist"
  }
});