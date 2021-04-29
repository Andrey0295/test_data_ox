import axios from "axios";
import actions from "./posts-actions";
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
import shortid from "shortid";

const newUserId = shortid.generate();

const fetchPosts = (searchQuery = "", page) => (dispatch) => {
  dispatch(actions.fetchPostsRequest);

  axios
    .get(
      `/posts?q=${searchQuery}&_embed=comments&_expand=user&_page=${page}&_limit=9`
    )
    .then((responce) => dispatch(actions.fetchPostsSuccess(responce.data)))
    .catch((error) => dispatch(actions.fetchPostsError(error)));
};

const addPost = ({ title, body, username = "" }) => (dispatch) => {
  const post = { title, body, user: { username } };

  dispatch(actions.addPostsRequest());

  axios
    .post("/posts", post)
    .then(({ data }) => dispatch(actions.addPostsSuccess(data)))
    .catch(({ message }) => dispatch(actions.addPostsError(message)));
};

const deletePost = (postId) => (dispatch) => {
  dispatch(actions.deletePostsRequest());

  axios
    .delete(`/posts/${postId}`)
    .then(() => dispatch(actions.deletePostsSuccess(postId)))
    .catch((error) => dispatch(actions.deletePostsError(error)));
};

export default {
  fetchPosts,
  addPost,
  deletePost,
};
