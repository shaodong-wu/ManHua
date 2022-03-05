/**
 * GET | LIST 获取漫画更新列表
 * @param {String} url        Api接口地址
 * @param {Function} success  调用成功的回调函数
 * @param {Function} fail     调用失败的回调函数
 */
const getUpdateList = () => new Promise((resolve, reject) => {
  wx.request({
    url: getApp().globalData.updateApi,
    method: 'GET',
    dataType: 'json',
    success: result => {
      const updatelist = result.data.data.update || [];
      const newUpdatelist = updatelist.sort(function (obj1, obj2) {
        const value1 = obj1.comicUpdateDate_weight;
        const value2 = obj2.comicUpdateDate_weight;
        return value2 - value1;
      });
      resolve(newUpdatelist);
    },
    fail: error => reject(error)
  });
});

exports.getUpdateList = getUpdateList;
