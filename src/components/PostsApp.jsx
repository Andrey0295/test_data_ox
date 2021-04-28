import React, { Component } from "react";
import AppBar from "./AppBar";
import Container from "./Container/Container";
import PostsList from "./PostsList/PostsList";
import axios from "axios";
import { connect } from "react-redux";
import postsOperations from "../redux/posts/posts-operations";
import postsSelectors from "../redux/posts/posts-selectors";

class PostsApp extends Component {
  state = {
    currentPage: 1,
    // posts: [],
    // isLoading: false,
  };
  componentDidMount() {
    const { fetchPosts } = this.props;
    fetchPosts(this.state.currentPage);
    // console.log(postsSelectors.getCurrentPage());
    // this.setState({ isLoading: true });
    // this.fetchPosts();
  }
  componentDidUpdate(prevProps, prevState) {
    const { currentPage } = this.state;
    if (prevState.currentPage !== currentPage) {
      this.props.fetchPosts(currentPage);
    }
  }

  handleClick = () => {
    this.setState(({ currentPage }) => ({
      currentPage: currentPage + 1,
    }));
    // this.props.fetchPosts(this.state.currentPage);
  };

  // fetchPosts = () => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=9")
  //     .then((res) => {
  //       this.setState({ posts: res.data });
  //       console.log(res.data);
  //     })
  //     .finally(this.setState({ isLoading: false }));

  render() {
    return (
      <>
        <AppBar />
        <Container>
          <div>
            <h1>Hello Posts</h1>
          </div>
          {!this.state.isLoading && <PostsList onDelete={() => {}} />}
          <button type="button" onClick={this.handleClick}>
            Get More Posts
          </button>
        </Container>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: (currentPage) =>
    dispatch(postsOperations.fetchPosts(currentPage)),
});

export default connect(null, mapDispatchToProps)(PostsApp);
