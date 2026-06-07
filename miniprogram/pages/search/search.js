const { searchGlobal } = require("../../utils/data-query");
const { agentDetailUrl, lineupDetailUrl, mapDetailUrl } = require("../../utils/route");

Page({
  data: {
    keyword: "",
    results: {
      maps: [],
      agents: [],
      lineups: [],
      total: 0,
    },
  },

  onLoad(options) {
    const keyword = decodeURIComponent(options.keyword || "");

    this.setData({ keyword });
    this.refreshResults(keyword);
  },

  onSearchInput(e) {
    const keyword = e.detail.value;

    this.setData({ keyword });
    this.refreshResults(keyword);
  },

  onSearchConfirm() {
    this.refreshResults(this.data.keyword);
  },

  refreshResults(keyword) {
    this.setData({
      results: searchGlobal(keyword),
    });
  },

  onMapTap(e) {
    wx.navigateTo({
      url: mapDetailUrl(e.currentTarget.dataset.id),
    });
  },

  onAgentTap(e) {
    wx.navigateTo({
      url: agentDetailUrl(e.currentTarget.dataset.id),
    });
  },

  onLineupTap(e) {
    wx.navigateTo({
      url: lineupDetailUrl(e.currentTarget.dataset.id),
    });
  },
});
