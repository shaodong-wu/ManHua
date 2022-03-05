// components/lazy-image/index.js
Component({
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  },
  externalClasses: ['custom-class'],
  properties: {
    src: String,
    width: String,
    height: String,
    radius: String,
    useErrorSlot: Boolean,
    useLoadingSlot: Boolean,
    ratio: String,
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
    imageUrl: '',
    isLoading: true,
    isError: false,
    alreadyShow: false, // 用于标记图片是否已经出现在可见区域中
  },

  lifetimes: {
    ready () {
      // observer的元素必须有高度 不然不会触发回调
      this.createIntersectionObserver()
        .relativeToViewport({
          bottom: 100,
        })
        .observe('.viewport', (rect) => {
          // 如果图片进入可见区域，但还是第一次出现
          if (!this.data.alreadyShow) {
            this.setData({
              imageUrl: rect.dataset.src,
              alreadyShow: true,
            });
          }
        });
    },
  },

  methods: {
    onLoad (event) {
      this.setData({
        isLoading: false,
      });
      this.triggerEvent('load', event);
    },

    onError (event) {
      this.setData({
        isError: true,
        isLoading: false,
      });
      this.triggerEvent('error', event);
    },

    onClick (event) {
      this.triggerEvent('click', event);
    },
  },
});
