const Player = require("../models/Player");
const redisClient = require("../cache");

exports.fetchTopPlayers = async ({ region, gameMode, limit = 10 }) => {
  const cacheKey = `topPlayers:${region || "all"}:${gameMode || "all"}`;
  const cached = await redisClient.get(cacheKey);
  if (cached) return JSON.parse(cached);

  const query = {};
  if (region) query.region = region;
  if (gameMode) query.gameMode = gameMode;

  const players = await Player.find(query).sort({ score: -1 }).limit(Number(limit));
  await redisClient.setEx(cacheKey, 300, JSON.stringify(players)); // 300 - 5 min
  return players;
};
