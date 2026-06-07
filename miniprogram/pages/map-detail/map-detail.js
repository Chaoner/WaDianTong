const {
  normalizeMapId,
  sideMap,
  getMapById,
  getRoleById,
  getAllData,
  getAgentsByRole,
} = require("../../utils/data-query");
const { agentDetailUrl } = require("../../utils/route");

Page({
  data: {
    currentMap: null,
    currentSide: "defense",
    currentSideName: "防守方",
    currentRoleId: "all",
    currentRoleName: "全部角色",
    sideOptions: [
      { id: "defense", name: "防守方" },
      { id: "attack", name: "进攻方" },
    ],
    roles: [],
    visibleAgents: [],
    sideMap,
  },

  onLoad(options) {
    const currentMap = getMapById(normalizeMapId(options || {}));
    const { roles } = getAllData();

    this.setData({
      currentMap,
      roles,
      visibleAgents: getAgentsByRole("all"),
    });

    wx.setNavigationBarTitle({
      title: currentMap.name,
    });
  },

  onSideTap(e) {
    const currentSide = e.currentTarget.dataset.side;

    this.setData({
      currentSide,
      currentSideName: sideMap[currentSide],
    });
  },

  onRoleTap(e) {
    const currentRoleId = e.currentTarget.dataset.roleId;

    this.setData({
      currentRoleId,
      currentRoleName: currentRoleId === "all" ? "全部角色" : getRoleById(currentRoleId).name,
      visibleAgents: getAgentsByRole(currentRoleId),
    });
  },

  onAgentTap(e) {
    wx.navigateTo({
      url: agentDetailUrl(e.currentTarget.dataset.id, {
        mapId: this.data.currentMap.id,
        side: this.data.currentSide,
        roleId: this.data.currentRoleId,
      }),
    });
  },
});
