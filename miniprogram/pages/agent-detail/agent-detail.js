const {
  normalizeAgentId,
  getAgentById,
  getAllData,
  getAbilitiesByAgent,
  getCategoriesByAgent,
  getLineups,
} = require("../../utils/data-query");
const { lineupDetailUrl } = require("../../utils/route");

Page({
  data: {
    agent: null,
    maps: [],
    sideOptions: [
      { id: "", name: "全部" },
      { id: "defense", name: "防守方" },
      { id: "attack", name: "进攻方" },
    ],
    abilities: [],
    categories: [],
    lineups: [],
    currentAbilityId: "",
    currentAbility: null,
    currentMapId: "bind",
    currentSide: "",
    currentCategoryId: "all",
    currentCategoryName: "全部点位",
    categoryIndex: 0,
  },

  onLoad(options) {
    const agent = getAgentById(normalizeAgentId(options || {}));
    const { maps } = getAllData();
    const abilities = getAbilitiesByAgent(agent.id);
    const currentAbilityId = options.abilityId || (abilities[0] && abilities[0].id);
    const currentMapId = options.mapId || "bind";
    const currentSide = options.side || "";

    this.setData({
      agent,
      maps,
      abilities,
      currentAbilityId,
      currentAbility: abilities.find((ability) => ability.id === currentAbilityId) || abilities[0],
      currentMapId,
      currentSide,
    });

    wx.setNavigationBarTitle({
      title: agent.name,
    });

    this.refreshLineups();
  },

  onAbilityTap(e) {
    const currentAbilityId = e.currentTarget.dataset.id;
    const currentAbility = this.data.abilities.find((ability) => ability.id === currentAbilityId);

    this.setData({
      currentAbilityId,
      currentAbility,
      currentCategoryId: "all",
      categoryIndex: 0,
    });

    this.refreshLineups();
  },

  onMapTap(e) {
    this.setData({
      currentMapId: e.currentTarget.dataset.id,
    });

    this.refreshLineups();
  },

  onSideTap(e) {
    this.setData({
      currentSide: e.currentTarget.dataset.side,
    });

    this.refreshLineups();
  },

  onCategoryChange(e) {
    const categoryIndex = Number(e.detail.value);
    const currentCategory = this.data.categories[categoryIndex] || this.data.categories[0];

    this.setData({
      categoryIndex,
      currentCategoryId: currentCategory.id,
    });

    this.refreshLineups();
  },

  refreshLineups() {
    const categories = getCategoriesByAgent(this.data.agent.id, this.data.currentAbilityId);
    const currentCategoryId = categories.some((category) => category.id === this.data.currentCategoryId)
      ? this.data.currentCategoryId
      : "all";
    const categoryIndex = categories.findIndex((category) => category.id === currentCategoryId);

    this.setData({
      categories,
      currentCategoryId,
      currentCategoryName: categories[categoryIndex >= 0 ? categoryIndex : 0].name,
      categoryIndex: categoryIndex >= 0 ? categoryIndex : 0,
      lineups: getLineups({
        agentId: this.data.agent.id,
        mapId: this.data.currentMapId,
        side: this.data.currentSide,
        abilityId: this.data.currentAbilityId,
        categoryId: currentCategoryId,
      }),
    });
  },

  onApplyTap() {
    wx.navigateTo({
      url: `/pages/feedback/feedback?agentId=${this.data.agent.id}`,
    });
  },

  onLineupTap(e) {
    wx.navigateTo({
      url: lineupDetailUrl(e.currentTarget.dataset.id),
    });
  },
});
