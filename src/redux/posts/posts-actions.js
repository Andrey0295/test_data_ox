import { createAction } from "@reduxjs/toolkit";

const fetchPostsRequest = createAction("contacts/fetchPostsRequest");
const fetchPostsSuccess = createAction("contacts/fetchPostsSuccess");
const fetchPostsError = createAction("contacts/fetchPostsError");

export default {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsError,
};
