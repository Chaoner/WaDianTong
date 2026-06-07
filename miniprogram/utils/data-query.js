const { maps } = require("../data/maps");
const { roles } = require("../data/roles");
const { agents } = require("../data/agents");
const { abilities } = require("../data/abilities");
const { categories } = require("../data/categories");
const { lineups } = require("../data/lineups");

const sideMap = {
  defense: "防守方",
  attack: "进攻方",
};

function clampRating(value) {
  return Math.max(0, Math.min(5, Number(value) || 0));
}

function createRatingStars(value) {
  const rating = clampRating(value);

  return [1, 2, 3, 4, 5].map((index) => {
    const fill = Math.max(0, Math.min(1, rating - (index - 1))) * 100;

    return {
      index,
      fill: Math.round(fill),
    };
  });
}

function bySort(a, b) {
  return (a.sort || 0) - (b.sort || 0);
}

function findById(list, id, fallbackIndex) {
  return list.find((item) => item.id === id) || list[fallbackIndex || 0];
}

function normalizeMapId(options) {
  return options.mapId || options.map || "bind";
}

function normalizeAgentId(options) {
  return options.agentId || options.agent || "brimstone";
}

function getMapById(id) {
  return findById(maps, id, 0);
}

function getRoleById(id) {
  return findById(roles, id, 0);
}

function getAgentById(id) {
  return findById(agents, id, 0);
}

function getAbilityById(id) {
  return findById(abilities, id, 0);
}

function getCategoryById(id) {
  return findById(categories, id, 0);
}

function getAgentsByRole(roleId) {
  const nextRoleId = roleId || "all";
  return agents
    .filter((agent) => nextRoleId === "all" || agent.roleId === nextRoleId)
    .sort(bySort);
}

function normalizeKeyword(keyword) {
  return String(keyword || "").trim().toLowerCase();
}

function includesKeyword(values, keyword) {
  const nextKeyword = normalizeKeyword(keyword);

  if (!nextKeyword) return true;

  return values
    .filter((value) => value !== undefined && value !== null)
    .join(" ")
    .toLowerCase()
    .indexOf(nextKeyword) >= 0;
}

function searchMaps(keyword) {
  return maps
    .filter((map) => includesKeyword([map.name, map.enName, map.meta, map.sites, map.mode], keyword))
    .sort(bySort);
}

function searchAgents(keyword, roleId) {
  return getAgentsByRole(roleId || "all").filter((agent) =>
    includesKeyword([agent.name, agent.enName, agent.roleName, agent.description], keyword)
  );
}

function getAbilitiesByAgent(agentId) {
  return abilities.filter((ability) => ability.agentId === agentId).sort(bySort);
}

function getCategoriesByAgent(agentId, abilityId) {
  return categories
    .filter((category) => {
      if (category.id === "all") return true;
      if (category.agentId && category.agentId !== agentId) return false;
      if (abilityId && category.abilityId && category.abilityId !== abilityId) return false;
      return true;
    })
    .sort(bySort);
}

function enrichLineup(lineup) {
  const map = getMapById(lineup.mapId);
  const agent = getAgentById(lineup.agentId);
  const role = getRoleById(lineup.roleId);
  const ability = getAbilityById(lineup.abilityId);
  const category = getCategoryById(lineup.categoryId);
  const ratingAverage = clampRating(lineup.ratingAverage);
  const ratingCount = Number(lineup.ratingCount) || 0;

  return Object.assign({}, lineup, {
    map,
    mapName: map.name,
    agent,
    agentName: agent.name,
    role,
    roleName: role.name,
    ability,
    abilityName: ability.name,
    category,
    categoryName: category.name,
    sideName: sideMap[lineup.side] || lineup.side,
    metaText: `${map.name} · ${agent.name} · ${sideMap[lineup.side] || lineup.side}`,
    tagText: `${map.name} · ${category.name}`,
    ratingAverage: Number(ratingAverage.toFixed(1)),
    ratingText: ratingAverage.toFixed(1),
    ratingCount,
    ratingStars: createRatingStars(ratingAverage),
  });
}

function matchKeyword(lineup, keyword) {
  if (!keyword) return true;

  const lowerKeyword = String(keyword).toLowerCase();
  const map = getMapById(lineup.mapId);
  const agent = getAgentById(lineup.agentId);
  const ability = getAbilityById(lineup.abilityId);
  const category = getCategoryById(lineup.categoryId);
  const source = [
    lineup.title,
    lineup.summary,
    map.name,
    map.enName,
    agent.name,
    agent.enName,
    ability.name,
    category.name,
    (lineup.tags || []).join(" "),
  ]
    .join(" ")
    .toLowerCase();

  return source.indexOf(lowerKeyword) >= 0;
}

function getLineups(filters) {
  const nextFilters = filters || {};

  return lineups
    .filter((lineup) => lineup.status === "approved")
    .filter((lineup) => !nextFilters.mapId || lineup.mapId === nextFilters.mapId)
    .filter((lineup) => !nextFilters.agentId || lineup.agentId === nextFilters.agentId)
    .filter((lineup) => !nextFilters.side || lineup.side === nextFilters.side)
    .filter((lineup) => !nextFilters.roleId || nextFilters.roleId === "all" || lineup.roleId === nextFilters.roleId)
    .filter((lineup) => !nextFilters.abilityId || lineup.abilityId === nextFilters.abilityId)
    .filter((lineup) => !nextFilters.categoryId || nextFilters.categoryId === "all" || lineup.categoryId === nextFilters.categoryId)
    .filter((lineup) => matchKeyword(lineup, nextFilters.keyword || nextFilters.tag))
    .map(enrichLineup);
}

function getLineupDetail(id) {
  return enrichLineup(findById(lineups, id, 0));
}

function searchGlobal(keyword) {
  const nextKeyword = normalizeKeyword(keyword);

  if (!nextKeyword) {
    return {
      maps: [],
      agents: [],
      lineups: [],
      total: 0,
    };
  }

  const mapResults = searchMaps(nextKeyword);
  const agentResults = searchAgents(nextKeyword, "all");
  const lineupResults = getLineups({ keyword: nextKeyword });

  return {
    maps: mapResults,
    agents: agentResults,
    lineups: lineupResults,
    total: mapResults.length + agentResults.length + lineupResults.length,
  };
}

function getHomeMaps() {
  return maps.slice(0, 3).sort(bySort);
}

function getHomeAgents() {
  return agents.slice(0, 4).sort(bySort);
}

function getAllData() {
  return {
    maps: maps.slice().sort(bySort),
    roles: roles.slice().sort(bySort),
    agents: agents.slice().sort(bySort),
    abilities: abilities.slice().sort(bySort),
    categories: categories.slice().sort(bySort),
    lineups: lineups.map(enrichLineup),
  };
}

module.exports = {
  sideMap,
  createRatingStars,
  normalizeMapId,
  normalizeAgentId,
  getMapById,
  getRoleById,
  getAgentById,
  getAbilityById,
  getCategoryById,
  getAgentsByRole,
  searchMaps,
  searchAgents,
  searchGlobal,
  getAbilitiesByAgent,
  getCategoriesByAgent,
  getLineups,
  getLineupDetail,
  getHomeMaps,
  getHomeAgents,
  getAllData,
};
