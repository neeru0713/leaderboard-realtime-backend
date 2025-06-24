const { fetchTopPlayers } = require("./utils/playerUtil");

module.exports = (io) => {
  io.on("connection", (socket) => {
    socket.on("getTopPlayers", async (params) => {
      const players = await fetchTopPlayers(params);
      socket.emit("topPlayers", players);
    });

    socket.on("scoreUpdated", async (params) => {
      const players = await fetchTopPlayers(params);
      io.emit("topPlayers", players);
    });
  });
};
