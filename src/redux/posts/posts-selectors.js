import { createSelector } from "@reduxjs/toolkit";

const getAllPosts = (state) => state.posts.posts;

export default {
  getAllPosts,
};
