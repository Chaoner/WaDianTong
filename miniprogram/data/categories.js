const categories = [
  {
    id: "all",
    name: "全部点位",
    description: "展示当前筛选条件下的所有点位。",
    sort: 0,
  },
  {
    id: "smoke_default",
    name: "封烟点位",
    agentId: "brimstone",
    abilityId: "brimstone_e",
    description: "常规封烟、默认烟和进点烟。",
    sort: 10,
  },
  {
    id: "molly_clear",
    name: "清点火位",
    agentId: "brimstone",
    abilityId: "brimstone_q",
    description: "用于清角、拖延拆包或阻止推进的燃烧弹。",
    sort: 20,
  },
  {
    id: "recon_default",
    name: "侦查点位",
    agentId: "sova",
    abilityId: "sova_e",
    description: "用于开局或回防的信息收集点位。",
    sort: 30,
  },
  {
    id: "entry_route",
    name: "进点路线",
    description: "决斗者进场、拉枪线和突破路线。",
    sort: 40,
  },
  {
    id: "setup_hold",
    name: "防守布置",
    description: "哨卫和控场者的区域控制方案。",
    sort: 50,
  },
];

module.exports = {
  categories,
};
