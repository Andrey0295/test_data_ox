import axios from "axios";
import actions from "./posts-actions";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsError,
  addPostsRequest,
  addPostsSuccess,
  addPostsError,
  updatePostsRequest,
  updatePostsSuccess,
  updatePostsError,
  deletePostsRequest,
  deletePostsSuccess,
  deletePostsError,
} = actions;

const fetchPosts = (searchQuery = "", page) => (dispatch) => {
  dispatch(fetchPostsRequest());

  axios
    .get(
      `/posts?q=${searchQuery}&_embed=comments&_expand=user&_page=${page}&_limit=9`
    )
    .then((responce) => dispatch(fetchPostsSuccess(responce.data)))
    .catch(({ message }) => dispatch(fetchPostsError(message)));
};

const addPost = ({ title, body, username = "" }) => (dispatch) => {
  const post = { title, body, user: { username } };

  dispatch(addPostsRequest());

  axios
    .post("/posts", post)
    .then(({ data }) => dispatch(addPostsSuccess(data)))
    .catch(({ message }) => dispatch(addPostsError(message)));
};

const updatePosts = ({ postId, title, body }) => (dispatch) => {
  const updateData = { title, body };
  dispatch(updatePostsRequest());
  axios
    .patch(`/posts/${postId}`, updateData)
    .then(({ data }) => dispatch(updatePostsSuccess(data)))
    .catch(({ message }) => dispatch(updatePostsError(message)));
};

const deletePost = (postId) => (dispatch) => {
  dispatch(deletePostsRequest());

  axios
    .delete(`/posts/${postId}`)
    .then(({ data }) => dispatch(deletePostsSuccess(data)))
    .catch(({ message }) => dispatch(deletePostsError(message)));
};

export default {
  fetchPosts,
  addPost,
  deletePost,
  updatePosts,
};
