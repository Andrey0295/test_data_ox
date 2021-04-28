import axios from "axios";
import actions from "./posts-actions";
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const fetchPosts = (page) => (dispatch) => {
  dispatch(actions.fetchPostsRequest);
  //   let page = 1;

  axios
    .get(`/posts?_page=${page}&_limit=9`)
    .then((responce) => dispatch(actions.fetchPostsSuccess(responce.data)))
    .catch((error) => dispatch(actions.fetchPostsError(error)));
};

export default { fetchPosts };
