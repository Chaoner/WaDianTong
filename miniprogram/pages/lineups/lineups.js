Page({
  data: {
    sides: ["进攻方", "防守方"],
    areas: ["A点", "B点", "中路", "回防"],
    selectedSide: "进攻方",
    selectedArea: "A点",
    lineups: [
      { id: "lineup_001", title: "A点进攻封烟", desc: "炼狱 · 源工重镇 · 烟位", difficulty: "简单" },
      { id: "lineup_002", title: "B点二楼烟", desc: "炼狱 · 源工重镇 · 烟位", difficulty: "进阶" },
      { id: "lineup_003", title: "中路控图燃烧瓶", desc: "炼狱 · 源工重镇 · 燃烧瓶", difficulty: "进阶" },
    ],
  },

  onSideTap(e) {
    this.setData({ selectedSide: e.currentTarget.dataset.side });
  },

  onAreaTap(e) {
    this.setData({ selectedArea: e.currentTarget.dataset.area });
  },

  onLineupTap(e) {
    wx.navigateTo({
      url: `/pages/lineup-detail/lineup-detail?id=${e.currentTarget.dataset.id}`,
    });
  },
});
