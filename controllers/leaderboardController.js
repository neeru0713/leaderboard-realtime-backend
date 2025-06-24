const { fetchTopPlayers } = require("../utils/playerUtil.js");
const Player = require("../models/Player");

exports.getTopPlayers = async (req, res) => {
  try {
    const players = await fetchTopPlayers(req.query);
    res.status(200).json(players);
  } catch (err) {
    res.status(500).json({ message: "Error fetching players", error: err.message });
  }
};

exports.updateScore = async (req, res) => {
  const { name, score, region, gameMode } = req.body;

  const player = await Player.findOneAndUpdate(
    { name, region, gameMode },
    {
      $set: {
        name,
        region,
        gameMode,
        updatedAt: new Date(),
      },
      $inc: { score },
    },
    { new: true, upsert: true }
  );

  res.json(player);
};
