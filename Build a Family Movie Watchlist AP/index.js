
import express from "express";
import helmet from "helmet";

import authRouter from "./routes/auth.js";
import watchlistRoutes from "./routes/watchlist.js";

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware for security headers and JSON request bodies.
app.use(helmet());
app.use(express.json());

// Authentication routes.
app.use("/api/auth", authRouter);

// Watchlist routes.
app.use("/api/watchlist", watchlistRoutes);

app.get("/", (req, res) => {
  res.send("Family Movie Watchlist API");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});