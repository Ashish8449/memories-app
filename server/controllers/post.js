import mongoose from "mongoose";

import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  console.log("start run post");
  try {
    const PostMessages = await PostMessage.find();
    console.log(PostMessages);
    res.status(200).json(PostMessages);
  } catch (err) {
    console.log(err.message);
    res.status(500);
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  try {
    const newPost = new PostMessage(post);
    await newPost.save();
    console.log("done");
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, message, creator, selectedFile, tags } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

  await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);
  await PostMessage.findByIdAndRemove(id);
  res.json({
    message: "Post deleted successfully",
  });
};
export const likePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const post = await PostMessage.findById(id);

  const updatedPost = await PostMessage.findByIdAndUpdate(
    id,
    { likeCount: post.likeCount + 1 },
    { new: true }
  );

  res.json(updatedPost);
};
