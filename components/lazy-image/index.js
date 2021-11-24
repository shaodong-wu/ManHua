// components/lazy-image/index.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  externalClasses: ['custom-class'],
  properties: {
    src: String,
    width: null,
    height: null,
    radius: null,
    useErrorSlot: Boolean,
    useLoadingSlot: Boolean,
    ratio: {
      type: Number,
      value: 1
    },
    fit: {
      type: String,
      value: 'fill',
    },
    showError: {
      type: Boolean,
      value: true,
    },
    showLoading: {
      type: Boolean,
      value: true,
    },
  },

  data: {
    url: '',
    error: false,
    loading: false,
    alreadyShow: false  // 用于标记图片是否已经出现在可见区域中
  },

  lifetimes: {
    ready() {
      // observer的元素必须有高度 不然不会触发回调
      this.createIntersectionObserver()
      .relativeToViewport({ bottom: 100 })
      .observe('.lazy-load', (rect) => {
        // 如果图片进入可见区域，但还是第一次出现
        if (!this.data.alreadyShow) {
          this.setData({
            url: rect.dataset.src,
            loading: true,
            alreadyShow: true
          });
        }
      });
    }
  },

  methods: {
    onLoad(event) {
      this.setData({
        loading: false
      });
      this.triggerEvent('load', event);
    },

    onError(event) {
      this.setData({
        error: true,
        loading: false
      });
      this.triggerEvent('error', event);
    },

    onClick(event) {
      this.triggerEvent('click', event);
    }
  }
})
