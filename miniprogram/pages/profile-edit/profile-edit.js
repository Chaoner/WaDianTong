Page({
  data: {
    avatarText: "\u74e6",
    nickname: "\u74e6\u70b9\u901a\u73a9\u5bb6",
    desc: "\u6536\u85cf\u70b9\u4f4d\u3001\u7ba1\u7406\u63d0\u4ea4\u3001\u67e5\u770b\u6d4f\u89c8\u8bb0\u5f55",
  },

  onLoad(options) {
    if (options.name) {
      this.setData({
        nickname: decodeURIComponent(options.name),
      });
    }
  },

  onNicknameInput(e) {
    this.setData({
      nickname: e.detail.value,
    });
  },

  onChooseAvatarTap() {
    wx.showToast({
      title: "\u4ece\u76f8\u518c\u9009\u62e9\u7a0d\u540e\u63a5\u5165",
      icon: "none",
    });
  },

  onUseWechatAvatarTap() {
    wx.showToast({
      title: "\u5fae\u4fe1\u5934\u50cf\u6388\u6743\u7a0d\u540e\u63a5\u5165",
      icon: "none",
    });
  },

  onSaveTap() {
    const nickname = this.data.nickname.trim();

    if (nickname.length < 2 || nickname.length > 12) {
      wx.showToast({
        title: "\u540d\u79f0\u9700\u8981 2-12 \u4e2a\u5b57\u7b26",
        icon: "none",
      });
      return;
    }

    wx.showToast({
      title: "\u5df2\u4fdd\u5b58",
      icon: "success",
    });

    setTimeout(() => {
      wx.navigateBack();
    }, 500);
  },

  onCancelTap() {
    wx.navigateBack();
  },
});
