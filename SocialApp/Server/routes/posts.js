import express from "express";
import { getFeedPosts, getUsersPost, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// READ
router.get("/", verifyToken, getFeedPosts);
router.get(":userId/posts", verifyToken, getUsersPost);

// UPDATES
router.patch("/:id/like", verifyToken, likePost);
