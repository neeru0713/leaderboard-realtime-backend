require("dotenv").config();
const redis = require("redis");
const client = redis.createClient({
  url: process.env.REDIS_URL,
});

client.on("error", (err) => console.error("Redis error", err));
client.connect();

module.exports = client;
