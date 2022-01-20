const {
  filterDataList
} = require('../../../utils/filter');
const SHOW_LENGTH = 6;

const app = getApp();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    _recommendBooks: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgHost: app.globalData.pathRules.image_domain,
    _startIndex: 0,
    _endIndex: 6,
    _switchNumber: 0,
    exhibitCartoon: [],
    
  },

  observers: {
    '_recommendBooks': function (newValue) {
      if (newValue && newValue.comic_info) {
        this._setExhibitCartoon(newValue);
      }
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 切换展示的卡通
    switchExhibitsHandle() {
      const recommendBook = this.properties._recommendBook;
      const times = recommendBook.comic_info.length / SHOW_LENGTH;
      this.data._switchNumber++;
      if (this.data._switchNumber === times) {
        this.data._switchNumber = 0;
        this.data._startIndex = 0;
        this.data._endIndex = 6;
      } else {
        this.data._startIndex = this.data._endIndex;
        this.data._endIndex = this.data._endIndex + SHOW_LENGTH;
      }
      this._filterComicData(recommendBook);
    },

    // 过滤需要显示的数据
    _filterComicData(recommendBook) {
      const exhibitCartoon = filterDataList(
        recommendBook,
        this.data._startIndex,
        this.data._endIndex
      );
      this.setData({ exhibitCartoon });
    },

    // 将properties中的数据映射到data中，并过滤成需要的格式
    _setExhibitCartoon(newValue) {
      this._filterComicData(newValue);
    }
  }
});
