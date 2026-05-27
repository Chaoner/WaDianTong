Page({
  data: {
    quickTags: ["进攻", "防守", "烟位", "闪位", "侦查"],
    maps: [
      { id: "ascent", name: "亚海悬城", meta: "A/B 双点" },
      { id: "haven", name: "隐世修所", meta: "三包点" },
      { id: "bind", name: "源工重镇", meta: "传送门" },
    ],
    agents: [
      { id: "brimstone", name: "炼狱", initial: "炼", role: "控场" },
      { id: "sova", name: "猎枭", initial: "猎", role: "先锋" },
      { id: "jett", name: "捷风", initial: "捷", role: "决斗" },
      { id: "killjoy", name: "奇乐", initial: "奇", role: "哨卫" },
    ],
  },

  onSearchTap() {
    wx.navigateTo({
      url: "/pages/lineups/lineups?keyword=",
    });
  },

  onQuickTagTap(e) {
    const tag = e.currentTarget.dataset.tag;
    wx.navigateTo({
      url: `/pages/lineups/lineups?tag=${tag}`,
    });
  },

  onMapTap(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/lineups/lineups?map=${id}`,
    });
  },

  onAgentTap(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/lineups/lineups?agent=${id}`,
    });
  },
});
