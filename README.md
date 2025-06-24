# 🏆 Real-Time Leaderboard System

This project is a real-time leaderboard system built using **Node.js**, **MongoDB**, **Socket.IO**, **Redis**, and **React**. It allows players to compete in different game modes and regions, with live score tracking and daily resets.


## 🚀 Features

### 📊 Leaderboard & Scoring
- Players can **submit or update scores**.
- **Leaderboard shows top N players**, filterable by:
  - Region
  - Game Mode
- Scores **expire after 24 hours** (via TTL), ensuring a fresh daily competition.

### 🔁 Real-Time Updates (Socket.IO)
- When a score is updated:
  - All connected clients **instantly receive** the updated leaderboard.
- React frontend listens to real-time `topPlayers` events.

### 📦 REST APIs
- `POST /api/leaderboard/update`: Submit or update player score.
- `GET /api/leaderboard/top`: Fetch top players by region or game mode (with caching).

### ⚡ Caching with Redis
- Top players are cached per region/gameMode using Redis for **fast retrieval**.
- Cache automatically refreshes when new scores are submitted.

### 🔒 MongoDB TTL Indexing
- Player scores are **automatically deleted after 24 hours** using MongoDB TTL indexing on the `updatedAt` field.

---

## 🧱 Tech Stack

| Layer       | Technology         |
|-------------|--------------------|
| Frontend    | React, Socket.IO-client |
| Backend     | Node.js, Express   |
| Database    | MongoDB (Mongoose) |
| Real-time   | Socket.IO          |
| Caching     | Redis              |
| Dev Tools   | Nodemon, dotenv    |



## 📦 API Endpoints

| Method | Endpoint                   | Description                    |
|--------|----------------------------|--------------------------------|
| POST   | `/api/players/score`       | Submit or update score        |
| GET    | `/api/players/top`         | Get top players with filters  |

---

## ⚙️ Setup Instructions

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/leaderboard-app.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   REDIS_URL=redis://localhost:6379
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

---

## 💡 Design Decisions

- Used **MongoDB TTL** to avoid needing a cron job for score expiry.
- **Redis caching** added to reduce DB load and speed up leaderboard access.
- **Socket.IO** ensures live experience for players tracking rankings.

---

## 📈 Bonus Features (Optional/Future Scope)
- Like/upvote tips per milestone.
- Partner-shared leaderboards.
- Game analytics dashboard.