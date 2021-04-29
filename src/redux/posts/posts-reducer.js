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

const post = createReducer([], {
  [actions.fetchPostsSuccess]: (state, action) => [...state, ...action.payload],
  [actions.addPostsSuccess]: (state, action) => [...state, action.payload],
  [actions.deletePostsSuccess]: (state, action) =>
    state.filter((post) => post.id !== action.payload),
  [actions.cleanPosts]: (state, __) => (state = []),
});

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  post,
  filter,
});
