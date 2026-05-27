Page({
  data: {
    maps: [
      { id: "ascent", name: "亚海悬城", meta: "默认推荐 12 个点位", status: "热门" },
      { id: "haven", name: "隐世修所", meta: "默认推荐 9 个点位", status: "热门" },
      { id: "bind", name: "源工重镇", meta: "默认推荐 16 个点位", status: "更新" },
      { id: "split", name: "霓虹町", meta: "默认推荐 8 个点位", status: "计划" },
    ],
  },

  onMapTap(e) {
    wx.navigateTo({
      url: `/pages/lineups/lineups?map=${e.currentTarget.dataset.id}`,
    });
  },
});
