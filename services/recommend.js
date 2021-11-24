/**
 * GET | LIST  获取首页推荐列表
 * @param {Number} page      页码
 * @param {Number} booktype  图书类型, 132表示男版， 133表示女版
 */
const getRecommendList = (page, booktype) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: getApp().globalData.recommendApi,
      method: 'GET',
      dataType: 'json',
      data: {
        pagesize: 4,
        page,
        booktype,
        pytype: 'tuijian',  // book的拼音
        platformname: 'wap',
        productname: 'kmh',
      },
      success: result => {
        const recommendList = result.data.data.book || [];
        if (page === 1) {
          recommendList.splice(1, 1);
        }
        resolve(recommendList);
      },
      fail: error => reject(error)
    });
  });
};

exports.getRecommendList = getRecommendList;