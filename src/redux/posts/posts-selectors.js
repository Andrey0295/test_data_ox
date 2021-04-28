import { createSelector } from "@reduxjs/toolkit";

const getAllPosts = (state) => state.posts.posts;

const getFilterValue = (state) => state.posts.filter;

// const getFilterValue = (state) => state.phonebook.filter;

const getVisiblePosts = createSelector(
  [getAllPosts, getFilterValue],
  (allPosts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allPosts.filter((post) =>
      post.user.username.toLowerCase().includes(normalizedFilter)
    );
  }
);

// const getVisibleContacts = createSelector(
//   [getAllContacts, getFilterValue],
//   (allContacts, filter) => {
//     const normalizedFilter = filter.toLowerCase();

//     return allContacts.filter(({ name }) =>
//       name.toLowerCase().includes(normalizedFilter)
//     );
//   }
// );

export default {
  getAllPosts,
  getFilterValue,
  getVisiblePosts,
};
