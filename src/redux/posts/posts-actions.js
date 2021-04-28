import { createAction } from "@reduxjs/toolkit";

const fetchPostsRequest = createAction("posts/fetchPostsRequest");
const fetchPostsSuccess = createAction("posts/fetchPostsSuccess");
const fetchPostsError = createAction("posts/fetchPostsError");

export default {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsError,
};
