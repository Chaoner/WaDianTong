const lineups = [
  {
    id: "lineup_bind_brimstone_a_default_smoke",
    title: "A点进攻默认烟",
    mapId: "bind",
    agentId: "brimstone",
    roleId: "controller",
    side: "attack",
    abilityId: "brimstone_e",
    categoryId: "smoke_default",
    summary: "从A短进人前，在默认站点抛出烟幕，封住守方关键视野，适合进攻方快速控A点，也可作为队友转点时的遮挡烟。",
    difficulty: "可用",
    ratingAverage: 4.7,
    ratingCount: 128,
    tags: ["A点", "进攻", "默认烟", "封烟"],
    cover: "/images/lineups/stand_1280x720.png",
    media: {
      stand: [
        {
          type: "image",
          src: "/images/lineups/stand_1280x720.png",
          title: "站点图 1",
          description: "站在A短箱体右侧边缘，对准墙面中线。",
        },
        {
          type: "image",
          src: "/images/lineups/stand_1280x720.png",
          title: "站点图 2",
          description: "备用站位，贴住同侧墙体边线。",
        },
      ],
      aim: [
        {
          type: "image",
          src: "/images/lineups/aim_1280x720.png",
          title: "瞄点 1",
          description: "准星对准墙面缺口的中心。",
        },
        {
          type: "image",
          src: "/images/lineups/aim_1280x720.png",
          title: "瞄点 2",
          description: "备用瞄点，适合不同准星高度校准。",
        },
      ],
      effect: [
        {
          type: "video",
          src: "/images/lineups/effect_1280x720.png",
          title: "效果预览",
          description: "烟幕覆盖A点入口视野。",
        },
      ],
    },
    status: "approved",
  },
  {
    id: "lineup_bind_brimstone_b_window_smoke",
    title: "B点二楼封烟",
    mapId: "bind",
    agentId: "brimstone",
    roleId: "controller",
    side: "attack",
    abilityId: "brimstone_e",
    categoryId: "smoke_default",
    summary: "用于封锁B点二楼视野，降低队友进入包点时被高点架枪的风险。",
    difficulty: "可用",
    ratingAverage: 4.3,
    ratingCount: 86,
    tags: ["B点", "进攻", "封烟"],
    cover: "/images/lineups/aim_1280x720.png",
    media: {
      stand: [
        {
          type: "image",
          src: "/images/lineups/stand_1280x720.png",
          title: "站点图 1",
          description: "靠近B长入口箱体边缘。",
        },
      ],
      aim: [
        {
          type: "image",
          src: "/images/lineups/aim_1280x720.png",
          title: "瞄点 1",
          description: "对齐屋檐左侧转角。",
        },
      ],
      effect: [
        {
          type: "image",
          src: "/images/lineups/effect_1280x720.png",
          title: "效果图",
          description: "烟幕遮挡B二楼窗口。",
        },
      ],
    },
    status: "approved",
  },
  {
    id: "lineup_bind_brimstone_defense_a_retake_smoke",
    title: "A点防守回防烟",
    mapId: "bind",
    agentId: "brimstone",
    roleId: "controller",
    side: "defense",
    abilityId: "brimstone_e",
    categoryId: "smoke_default",
    summary: "防守方回防A点时，从安全位置补出遮挡烟，切断进攻方后点视野，方便队友重新进入包点。",
    difficulty: "可用",
    ratingAverage: 4.5,
    ratingCount: 64,
    tags: ["A点", "防守", "回防烟", "封烟"],
    cover: "/images/lineups/effect_1280x720.png",
    media: {
      stand: [
        {
          type: "image",
          src: "/images/lineups/stand_1280x720.png",
          title: "站点图 1",
          description: "站在A点后场安全角，贴住墙体边缘。",
        },
      ],
      aim: [
        {
          type: "image",
          src: "/images/lineups/aim_1280x720.png",
          title: "瞄点 1",
          description: "准星对准墙体上沿与管线交汇处。",
        },
      ],
      effect: [
        {
          type: "image",
          src: "/images/lineups/effect_1280x720.png",
          title: "效果图",
          description: "烟幕遮挡A点后点视野。",
        },
      ],
    },
    status: "approved",
  },
  {
    id: "lineup_ascent_sova_mid_recon",
    title: "中路开局侦查箭",
    mapId: "ascent",
    agentId: "sova",
    roleId: "initiator",
    side: "defense",
    abilityId: "sova_e",
    categoryId: "recon_default",
    summary: "防守方开局侦查中路推进人数，帮助队友判断是否需要补防。",
    difficulty: "可用",
    ratingAverage: 4.8,
    ratingCount: 103,
    tags: ["中路", "防守", "侦查"],
    cover: "/images/lineups/effect_1280x720.png",
    media: {
      stand: [
        {
          type: "image",
          src: "/images/lineups/stand_1280x720.png",
          title: "站点图 1",
          description: "站在中路靠后安全位置。",
        },
      ],
      aim: [
        {
          type: "image",
          src: "/images/lineups/aim_1280x720.png",
          title: "瞄点 1",
          description: "瞄准上沿灯箱位置。",
        },
      ],
      effect: [
        {
          type: "image",
          src: "/images/lineups/effect_1280x720.png",
          title: "效果图",
          description: "侦查箭覆盖中路入口。",
        },
      ],
    },
    status: "approved",
  },
  {
    id: "lineup_haven_killjoy_c_hold",
    title: "C点防守炮台",
    mapId: "haven",
    agentId: "killjoy",
    roleId: "sentinel",
    side: "defense",
    abilityId: "killjoy_e",
    categoryId: "setup_hold",
    summary: "炮台监控C长推进，配合队友交叉火力拖慢进攻节奏。",
    difficulty: "可用",
    ratingAverage: 4.1,
    ratingCount: 52,
    tags: ["C点", "防守", "炮台"],
    cover: "/images/lineups/stand_1280x720.png",
    media: {
      stand: [
        {
          type: "image",
          src: "/images/lineups/stand_1280x720.png",
          title: "布置点 1",
          description: "靠近C点后场安全角。",
        },
      ],
      aim: [
        {
          type: "image",
          src: "/images/lineups/aim_1280x720.png",
          title: "朝向 1",
          description: "炮台朝向C长入口。",
        },
      ],
      effect: [
        {
          type: "image",
          src: "/images/lineups/effect_1280x720.png",
          title: "覆盖范围",
          description: "覆盖C长第一接触区域。",
        },
      ],
    },
    status: "approved",
  },
];

module.exports = {
  lineups,
};
