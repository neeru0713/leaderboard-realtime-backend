const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: String,
  score: Number,
  region: String,
  gameMode: String,
  updatedAt: {
    type: Date,
    default: Date.now,
    index: { expires: 86400 } // TTL: 24 hours - only keep the players who are actively playing daily, delete non active users
  },
});

playerSchema.index({ region: 1, gameMode: 1 });

module.exports = mongoose.model("Player", playerSchema);
