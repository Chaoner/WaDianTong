const { getAllData, searchAgents } = require("../../utils/data-query");
const { agentDetailUrl } = require("../../utils/route");

Page({
  data: {
    roles: [],
    selectedRoleId: "all",
    searchKeyword: "",
    visibleAgents: [],
  },

  onLoad() {
    const { roles } = getAllData();

    this.setData({ roles });
    this.refreshAgents();
  },

  onSearchInput(e) {
    this.setData({
      searchKeyword: e.detail.value,
    });

    this.refreshAgents();
  },

  onSearchConfirm() {
    this.refreshAgents();
  },

  onRoleTap(e) {
    const selectedRoleId = e.currentTarget.dataset.roleId;

    this.setData({
      selectedRoleId,
    });

    this.refreshAgents();
  },

  refreshAgents() {
    this.setData({
      visibleAgents: searchAgents(this.data.searchKeyword, this.data.selectedRoleId),
    });
  },

  onAgentTap(e) {
    wx.navigateTo({
      url: agentDetailUrl(e.currentTarget.dataset.id),
    });
  },
});
