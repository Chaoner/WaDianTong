Page({
  onFavoritesTap() {
    wx.navigateTo({ url: "/pages/favorites/favorites" });
  },

  onHistoryTap() {
    wx.navigateTo({ url: "/pages/history/history" });
  },

  onFeedbackTap() {
    wx.navigateTo({ url: "/pages/feedback/feedback" });
  },
});
