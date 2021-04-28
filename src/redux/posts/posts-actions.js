import { createAction } from "@reduxjs/toolkit";

const fetchPostsRequest = createAction("posts/fetchPostsRequest");
const fetchPostsSuccess = createAction("posts/fetchPostsSuccess");
const fetchPostsError = createAction("posts/fetchPostsError");

const cleanPosts = createAction("posts/cleanPosts");

const changeFilter = createAction("posts/changeFilter");

export default {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsError,

  changeFilter,

  cleanPosts,
};
