/**
 * GET | Object 获取指定漫画的主体信息
 * @param {Number} comic_id 漫画_ID
 */
const getComicInfoBody = (comic_id) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: getApp().globalData.comicInfoBodyApi,
      method: 'GET',
      dataType: 'json',
      data: {
        comic_id,
        platformname: 'android',
        productname: 'kmh',
      },
      success: result => resolve(result.data),
      fail: error => reject(error)
    });
  });
}

/**
 * GET | Object 获取指定漫画的角色信息
 * @param {Number} comic_id 漫画_ID
 */
const getComicInfoRole = (comic_id) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: getApp().globalData.comicInfoRoleApi,
      method: 'GET',
      dataType: 'json',
      data: {
        comic_id, // 漫画的id
        platformname: 'android',
        productname: 'kmh'
      },
      success: result => resolve(result.data.data),
      fail: error => reject(error)
    });
  });
}

/**
 * GET | Object  获取指定漫画的打榜信息
 * @param {Number} comic_id 漫画_ID
 */
const getComicInfoInfluence = (comic_id) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: getApp().globalData.comicInfoInfluenceApi,
      method: 'GET',
      dataType: 'json',
      data: {
        comic_id, // 漫画的id
        rank_type: 'all',
        platformname: 'android',
        productname: 'kmh'
      },
      success: result => resolve(result.data.data.call_data),
      fail: error => reject(error)
    });
  });
}

module.exports = {
  getComicInfoBody,
  getComicInfoRole,
  getComicInfoInfluence
}