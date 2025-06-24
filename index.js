require("dotenv").config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
const socketIo = require("socket.io");
const leaderboardRoutes = require("./routes/leaderboardRoutes.js");
const handleSocket = require("./socketHandler.js");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
  },
});

app.use(cors());
app.use(express.json());
app.use("/api/leaderboard", leaderboardRoutes);


handleSocket(io);
console.log("...", process.env.MONGO_URI)
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    server.listen(process.env.PORT || 8080, () => {
      console.log("Server running on port", process.env.PORT || 3000);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));
