const { lineupDetailUrl } = require("../../utils/route");

Page({
  data: {
    user: {
      name: "\u74e6\u70b9\u901a\u73a9\u5bb6",
      desc: "\u6536\u85cf\u70b9\u4f4d\u3001\u7ba1\u7406\u63d0\u4ea4\u3001\u67e5\u770b\u6d4f\u89c8\u8bb0\u5f55",
    },
    stats: [
      { id: "favorites", num: 18, label: "\u6211\u7684\u6536\u85cf" },
      { id: "history", num: 7, label: "\u6700\u8fd1\u6d4f\u89c8" },
      { id: "submissions", num: 3, label: "\u6211\u7684\u63d0\u4ea4" },
    ],
    menus: [
      { id: "favorites", title: "\u6211\u7684\u6536\u85cf", desc: "\u67e5\u770b\u5df2\u6536\u85cf\u7684\u70b9\u4f4d", count: 18 },
      { id: "history", title: "\u6700\u8fd1\u6d4f\u89c8", desc: "\u5feb\u901f\u56de\u5230\u521a\u770b\u8fc7\u7684\u5730\u56fe\u548c\u70b9\u4f4d", count: 7 },
      { id: "submissions", title: "\u6211\u7684\u70b9\u4f4d", desc: "\u67e5\u770b\u63d0\u4ea4\u3001\u5ba1\u6838\u4e2d\u548c\u5df2\u901a\u8fc7\u7684\u70b9\u4f4d", count: 3 },
      { id: "messages", title: "\u6d88\u606f\u4e0e\u5ba1\u6838", desc: "\u67e5\u770b\u5ba1\u6838\u53cd\u9988\u548c\u7cfb\u7edf\u901a\u77e5", count: 2 },
    ],
    recentLineup: {
      id: "lineup_bind_brimstone_defense_a_retake_smoke",
      title: "A\u70b9\u9632\u5b88\u56de\u9632\u70df",
      meta: "\u6e90\u5de5\u91cd\u9547 \u00b7 \u70bc\u72f1 \u00b7 \u5c01\u70df\u70b9\u4f4d",
      rating: "\u2605\u2605\u2605\u2605\u2606",
    },
  },

  onProfileTap() {
    wx.navigateTo({
      url: `/pages/profile-edit/profile-edit?name=${encodeURIComponent(this.data.user.name)}`,
    });
  },

  onAddLineupTap() {
    wx.navigateTo({
      url: "/pages/lineup-add/lineup-add",
    });
  },

  onMenuTap(e) {
    const id = e.currentTarget.dataset.id;

    if (id === "favorites") {
      wx.navigateTo({ url: "/pages/favorites/favorites" });
      return;
    }

    if (id === "history") {
      wx.navigateTo({ url: "/pages/history/history" });
      return;
    }

    wx.showToast({
      title: id === "submissions" ? "\u6211\u7684\u70b9\u4f4d\u7a0d\u540e\u63a5\u5165" : "\u6d88\u606f\u4e2d\u5fc3\u7a0d\u540e\u63a5\u5165",
      icon: "none",
    });
  },

  onRecentTap() {
    wx.navigateTo({
      url: lineupDetailUrl(this.data.recentLineup.id),
    });
  },
});
