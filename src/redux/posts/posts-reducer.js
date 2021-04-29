import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import actions from "./posts-actions";

const post = createReducer([], {
  [actions.fetchPostsSuccess]: (state, { payload }) => [...state, ...payload],
  [actions.addPostsSuccess]: (state, { payload }) => [...state, payload],
  [actions.deletePostsSuccess]: (state, { payload }) =>
    state.filter((post) => post.id !== payload),
  [actions.cleanPosts]: (state, __) => (state = []),
  [actions.updatePostsSuccess]: (state, { payload }) =>
    state.map((post) => (post.id === payload.postId ? payload : post)),
});

const error = createReducer(null, {
  [actions.fetchPostsError]: (_, { payload }) => payload,
  [actions.addPostsError]: (_, { payload }) => payload,
  [actions.deletePostsError]: (_, { payload }) => payload,
  [actions.updatePostsError]: (_, { payload }) => payload,
});

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  post,
  error,
  filter,
});
