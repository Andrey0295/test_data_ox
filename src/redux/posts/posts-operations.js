import axios from "axios";
import actions from "./posts-actions";
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const fetchPosts = (searchQuery = "", page) => (dispatch) => {
  dispatch(actions.fetchPostsRequest);

  axios
    .get(
      `/posts?q=${searchQuery}&_embed=comments&_expand=user&_page=${page}&_limit=9`
    )
    .then((responce) => dispatch(actions.fetchPostsSuccess(responce.data)))
    .catch((error) => dispatch(actions.fetchPostsError(error)));
};

export default { fetchPosts };
