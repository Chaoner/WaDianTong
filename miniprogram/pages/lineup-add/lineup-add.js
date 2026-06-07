Page({
  data: {
    side: "defense",
    fields: [
      { id: "title", label: "点位名称", value: "例如：A点进攻默认烟" },
      { id: "map", label: "所属地图", value: "源工重镇" },
      { id: "agent", label: "所属角色", value: "炼狱" },
      { id: "ability", label: "使用技能", value: "空投烟幕" },
    ],
    mediaItems: [
      { id: "stand", title: "站点位置", desc: "支持多张图片", placeholder: "POSITION" },
      { id: "aim", title: "瞄点位置", desc: "支持多张图片", placeholder: "AIM" },
      { id: "effect", title: "点位效果", desc: "图片或视频", placeholder: "EFFECT" },
    ],
    categoryName: "封烟点位",
  },

  onFieldTap(e) {
    const field = this.data.fields.find((item) => item.id === e.currentTarget.dataset.id);

    wx.showToast({
      title: `${field.label}选择稍后接入`,
      icon: "none",
    });
  },

  onSideTap(e) {
    this.setData({
      side: e.currentTarget.dataset.side,
    });
  },

  onUploadTap(e) {
    const item = this.data.mediaItems.find((media) => media.id === e.currentTarget.dataset.id);

    wx.showToast({
      title: `${item.title}上传稍后接入`,
      icon: "none",
    });
  },

  onCategoryTap() {
    wx.showToast({
      title: "点位分类选择稍后接入",
      icon: "none",
    });
  },

  onSubmitTap() {
    wx.showModal({
      title: "提交审核",
      content: "当前为静态页面，后续会接入云存储和审核数据库。",
      showCancel: false,
      confirmText: "知道了",
    });
  },
});
