const { getHomeMaps, getHomeAgents } = require("../../utils/data-query");
const { mapDetailUrl, agentDetailUrl, searchUrl } = require("../../utils/route");

Page({
  data: {
    searchKeyword: "",
    maps: [],
    agents: [],
    officialBanners: [
      {
        id: "activity",
        tag: "官方活动",
        title: "无畏契约活动中心",
        desc: "领取福利、查看限时任务与官方活动。",
        url: "https://val.qq.com/activity.html",
        theme: "banner-red",
      },
      {
        id: "official",
        tag: "官网入口",
        title: "无畏契约国服官网",
        desc: "查看版本资讯、角色资料和官方公告。",
        url: "https://val.qq.com/main.html",
        theme: "banner-teal",
      },
      {
        id: "vct",
        tag: "赛事资讯",
        title: "VCT 官方赛事",
        desc: "关注赛程、战报和职业赛事动态。",
        url: "https://vct.qq.com/",
        theme: "banner-dark",
      },
    ],
  },

  onLoad() {
    this.setData({
      maps: getHomeMaps(),
      agents: getHomeAgents(),
    });
  },

  onSearchInput(e) {
    this.setData({
      searchKeyword: e.detail.value,
    });
  },

  onSearchConfirm() {
    const keyword = this.data.searchKeyword.trim();

    if (!keyword) {
      wx.showToast({
        title: "请输入搜索内容",
        icon: "none",
      });
      return;
    }

    wx.navigateTo({
      url: searchUrl(keyword),
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

  onAllMapsTap() {
    wx.switchTab({
      url: "/pages/maps/maps",
    });
  },

  onAllAgentsTap() {
    wx.switchTab({
      url: "/pages/agents/agents",
    });
  },

  onOfficialBannerTap(e) {
    const banner = this.data.officialBanners.find((item) => item.id === e.currentTarget.dataset.id);

    if (!banner) return;

    wx.navigateTo({
      url: `/pages/official-web/official-web?title=${encodeURIComponent(banner.title)}&url=${encodeURIComponent(banner.url)}`,
    });
  },
});
