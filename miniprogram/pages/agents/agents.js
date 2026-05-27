Page({
  data: {
    roles: ["全部", "控场", "先锋", "决斗", "哨卫"],
    selectedRole: "全部",
    agents: [
      { id: "brimstone", name: "炼狱", initial: "炼", role: "控场", count: 18 },
      { id: "sova", name: "猎枭", initial: "猎", role: "先锋", count: 12 },
      { id: "jett", name: "捷风", initial: "捷", role: "决斗", count: 9 },
      { id: "killjoy", name: "奇乐", initial: "奇", role: "哨卫", count: 11 },
      { id: "sage", name: "贤者", initial: "贤", role: "哨卫", count: 7 },
      { id: "omen", name: "幽影", initial: "幽", role: "控场", count: 10 },
    ],
    visibleAgents: [],
  },

  onLoad() {
    this.refreshVisibleAgents("全部");
  },

  onRoleTap(e) {
    this.refreshVisibleAgents(e.currentTarget.dataset.role);
  },

  refreshVisibleAgents(role) {
    const visibleAgents =
      role === "全部"
        ? this.data.agents
        : this.data.agents.filter((agent) => agent.role === role);

    this.setData({
      selectedRole: role,
      visibleAgents,
    });
  },

  onAgentTap(e) {
    wx.navigateTo({
      url: `/pages/lineups/lineups?agent=${e.currentTarget.dataset.id}`,
    });
  },
});
