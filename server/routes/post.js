import express from "express";
import {
  createPost,
  deletePost,
  getPosts,
  likePost,
  updatePost,
} from "../controllers/post.js";
// import { auth } from "../middleware/auth.js";

const router = express.Router();
router.get("/", getPosts);
// router.post("/", createPost);
// router.patch("/:id", updatePost);
// router.delete("/:id", deletePost);
// router.patch("/:id/likePost", likePost);

export default router;
