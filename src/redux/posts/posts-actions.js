import { createAction } from "@reduxjs/toolkit";

const fetchPostsRequest = createAction("posts/fetchPostsRequest");
const fetchPostsSuccess = createAction("posts/fetchPostsSuccess");
const fetchPostsError = createAction("posts/fetchPostsError");

const addPostsRequest = createAction("posts/addPostsRequest");
const addPostsSuccess = createAction("posts/addPostsSuccess");
const addPostsError = createAction("posts/addPostsError");

const deletePostsRequest = createAction("posts/deletePostsRequest");
const deletePostsSuccess = createAction("posts/deletePostsSuccess");
const deletePostsError = createAction("posts/deletePostsError");

const cleanPosts = createAction("posts/cleanPosts");

const changeFilter = createAction("posts/changeFilter");

export default {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsError,
  addPostsRequest,
  addPostsSuccess,
  addPostsError,
  deletePostsRequest,
  deletePostsSuccess,
  deletePostsError,

  changeFilter,

  cleanPosts,
};
