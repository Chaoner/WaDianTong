function buildQuery(params) {
  return Object.keys(params)
    .filter((key) => params[key] !== undefined && params[key] !== null && params[key] !== "")
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join("&");
}

function mapDetailUrl(mapId) {
  return `/pages/map-detail/map-detail?${buildQuery({ mapId })}`;
}

function agentDetailUrl(agentId, extra) {
  return `/pages/agent-detail/agent-detail?${buildQuery(Object.assign({ agentId }, extra || {}))}`;
}

function searchUrl(keyword) {
  return `/pages/search/search?${buildQuery({ keyword })}`;
}

function lineupDetailUrl(lineupId) {
  return `/pages/lineup-detail/lineup-detail?${buildQuery({ lineupId })}`;
}

module.exports = {
  buildQuery,
  mapDetailUrl,
  agentDetailUrl,
  searchUrl,
  lineupDetailUrl,
};
