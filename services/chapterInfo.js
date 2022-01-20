/**
 * 
 * @param {Number} comic_id         漫画ID
 * @param {String} chapter_newid    章节ID
 * @param {String} quality          漫画View质量, [ high、middle、low ]
 */
const getChapterInfo = (comic_id, chapter_newid, quality) => new Promise((resolve, reject) => {
  wx.request({
    url: getApp().globalData.chapterInfoApi,
    method: 'GET',
    dataType: 'json',
    data: {
      comic_id,
      chapter_newid,
      quality,
      isWebp: 1,
      product_id: 1,
      productname: 'kmh',
      platformname: 'pc',
    },
    success: result => resolve(result.data.data),
    fail: error => reject(error)
  });
});

/**
 * GET | LIST 获取指定漫画的章节列表
 * @param {Number} comic_id         漫画ID
 */
const getChapterList = (comic_id) => new Promise((resolve, reject) => {
  wx.request({
    url: getApp().globalData.chapterListApi,
    method: 'GET',
    dataType: 'json',
    data: {
      comic_id,
      product_id: 1,
      productname: 'kmh',
      platformname: 'pc'
    },
    success: result => resolve(result.data.data),
    fail: error => reject(error)
  });
});

module.exports = {
  getChapterInfo,
  getChapterList
};