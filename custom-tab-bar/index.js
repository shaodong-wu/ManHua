// custom-tab-bar/index.js
Component({
  /**
   * 组件的初始数据
   */
  data: {
    selected: -1,
    list: [
      {
        "pagePath": "/pages/find/find",
        "iconPath": "../static/images/tabBar/icon_community_unselected.png",
        "selectedIconPath": "../static/images/tabBar/icon_community_selection.png",
        "text": "看漫圈"
      },
      {
        "pagePath": "/pages/toUpdate/toUpdate",
        "iconPath": "../static/images/tabBar/icon_toupdate_unselected.png",
        "selectedIconPath": "../static/images/tabBar/icon_toupdate_selection.png",
        "text": "更新"
      },
      {
        "pagePath": "/pages/home/home",
        "iconPath": "../static/images/tabBar/icon_homepage_selection.png",
        "selectedIconPath": "../static/images/tabBar/icon_homepage_selection.png",
        "text": "首页"
      },
      {
        "pagePath": "/pages/bookshelf/bookshelf",
        "iconPath": "../static/images/tabBar/icon_bookshelf_unselected.png",
        "selectedIconPath": "../static/images/tabBar/icon_bookshelf_selection.png",
        "text": "书架"
      },
      {
        "pagePath": "/pages/myself/myself",
        "iconPath": "../static/images/tabBar/icon_mine_unselected.png",
        "selectedIconPath": "../static/images/tabBar/icon_mine_selection.png",
        "text": "我的"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset;
      wx.switchTab({ url: data.path });
    }
  }
})
