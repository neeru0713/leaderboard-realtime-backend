const express = require("express");
const router = express.Router();
const leaderboardController = require("../controllers/leaderboardController");

router.post("/update", leaderboardController.updateScore);
router.get("/top", leaderboardController.getTopPlayers);

module.exports = router;