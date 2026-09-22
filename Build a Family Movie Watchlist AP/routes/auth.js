import express from "express";
import jwt from "jsonwebtoken";
import { findByUsername } from "../utils/db.js";

const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Both fields are required.
  if (!username || !password) {
    return res.status(400).json({
      error: "Username and password are required.",
    });
  }

  const user = findByUsername(username);

  // users.json stores the plain test password in "_password".
  if (!user || user._password !== password) {
    return res.status(401).json({
      error: "Invalid credentials.",
    });
  }

  // Put id and role into the token because authorization needs them later.
  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
      role: user.role,
    },
    process.env.JWT_SECRET || "family-movie-watchlist-secret",
    {
      expiresIn: "1h",
    },
  );

  return res.status(200).json({
    token,
  });
});

export default router;
