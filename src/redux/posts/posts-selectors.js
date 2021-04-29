import { createSelector } from "@reduxjs/toolkit";

const getAllPosts = (state) => state.posts.post;

const getFilterValue = (state) => state.posts.filter;

const getVisiblePosts = createSelector(
  [getAllPosts, getFilterValue],
  (allPosts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allPosts.filter((post) =>
      post.user.username.toLowerCase().includes(normalizedFilter)
    );
  }
);

export default {
  getAllPosts,
  getFilterValue,
  getVisiblePosts,
};
