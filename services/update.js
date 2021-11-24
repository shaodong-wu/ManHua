/**
 * GET | LIST 获取漫画更新列表
 * @param {String} url        Api接口地址
 * @param {Function} success  调用成功的回调函数
 * @param {Function} fail     调用失败的回调函数
 */
const getUpdateList = () => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: getApp().globalData.updateApi,
      method: 'GET',
      dataType: 'json',
      success: result => {
        const updatelist = result.data.data.update || [];
        const new_updatelist = updatelist.sort(function (obj_1, obj_2) {
          let value_1 = obj_1['comicUpdateDate_weight'];
          let value_2 = obj_2['comicUpdateDate_weight'];
          return value_2 - value_1;
        });
        resolve(new_updatelist);
      },
      fail: error => reject(error)
    });
  });
};

exports.getUpdateList = getUpdateList;