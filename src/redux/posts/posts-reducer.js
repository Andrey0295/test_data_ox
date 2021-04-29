import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import actions from "./posts-actions";

// const { fetchPostsSuccess } = actions;

// const contacts = createReducer([], {
//   [fetchContactsSuccess]: (_, { payload }) => payload,
//   [addContactSuccess]: (state, { payload }) => [...state, payload],
//   [deleteContactSuccess]: (state, { payload }) =>
//     state.filter((contact) => contact.id !== payload),
// });

// [toggleCompletedSuccess]: (state, { payload }) =>
//     state.map(todo => (todo.id === payload.id ? payload : todo)),
// });

const post = createReducer([], {
  [actions.fetchPostsSuccess]: (state, action) => [...state, ...action.payload],
  [actions.addPostsSuccess]: (state, action) => [...state, action.payload],
  [actions.deletePostsSuccess]: (state, action) =>
    state.filter((post) => post.id !== action.payload),
  [actions.cleanPosts]: (state, __) => (state = []),
  [actions.updatePostsSuccess]: (state, action) =>
    state.map((post) =>
      post.id === action.payload.postId ? action.payload : post
    ),
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
