import axios from "axios";
import actions from "./posts-actions";
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const fetchPosts = (searchQuery = "", page) => (dispatch) => {
  dispatch(actions.fetchPostsRequest);
  //   let page = 1;

  axios
    .get(`/posts?q=${searchQuery}&_page=${page}&_limit=9`)
    .then((responce) => dispatch(actions.fetchPostsSuccess(responce.data)))
    .catch((error) => dispatch(actions.fetchPostsError(error)));
};
// ?_q=dolorem
//

export default { fetchPosts };
