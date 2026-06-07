const roles = [
  {
    id: "all",
    name: "全部",
    shortName: "全部",
    icon: "",
    sort: 0,
  },
  {
    id: "duelist",
    name: "决斗者",
    shortName: "决斗者",
    icon: "/images/roles/duelist.png",
    sort: 10,
  },
  {
    id: "initiator",
    name: "先锋",
    shortName: "先锋",
    icon: "/images/roles/initiator.png",
    sort: 20,
  },
  {
    id: "controller",
    name: "控场者",
    shortName: "控场者",
    icon: "/images/roles/controller.png",
    sort: 30,
  },
  {
    id: "sentinel",
    name: "哨卫",
    shortName: "哨卫",
    icon: "/images/roles/sentinel.png",
    sort: 40,
  },
];

module.exports = {
  roles,
};
