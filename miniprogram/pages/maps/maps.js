const { searchMaps } = require("../../utils/data-query");
const { mapDetailUrl } = require("../../utils/route");

Page({
  data: {
    searchKeyword: "",
    maps: [],
  },

  onLoad() {
    this.refreshMaps("");
  },

  onSearchInput(e) {
    const searchKeyword = e.detail.value;

    this.setData({ searchKeyword });
    this.refreshMaps(searchKeyword);
  },

  onSearchConfirm() {
    this.refreshMaps(this.data.searchKeyword);
  },

  refreshMaps(keyword) {
    this.setData({
      maps: searchMaps(keyword),
    });
  },

  onMapTap(e) {
    wx.navigateTo({
      url: mapDetailUrl(e.currentTarget.dataset.id),
    });
  },
});
