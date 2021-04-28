import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import actions from "./posts-actions";

const { fetchPostsSuccess } = actions;

// const contacts = createReducer([], {
//   [fetchContactsSuccess]: (_, { payload }) => payload,
//   [addContactSuccess]: (state, { payload }) => [...state, payload],
//   [deleteContactSuccess]: (state, { payload }) =>
//     state.filter((contact) => contact.id !== payload),
// });

const posts = createReducer([], () => {});

export default combineReducers({
  posts,
});
