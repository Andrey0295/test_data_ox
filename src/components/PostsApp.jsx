import React, { Component } from "react";

import Container from "./Container/Container";
import PostsList from "./PostsList/PostsList";
import SearchBar from "./SearchBar/SearchBar";

import { connect } from "react-redux";
import postsOperations from "../redux/posts/posts-operations";
import postsActions from "../redux/posts/posts-actions";

class PostsApp extends Component {
  state = {
    currentPage: 1,
    searchQuery: "",
  };
  componentDidMount() {
    const { fetchPosts } = this.props;
    fetchPosts(this.state.searchQuery, this.state.currentPage);
  }
  componentDidUpdate(prevProps, prevState) {
    const { currentPage, searchQuery } = this.state;
    if (
      prevState.currentPage !== currentPage ||
      prevState.searchQuery !== searchQuery
    ) {
      this.props.fetchPosts(searchQuery, currentPage);
    }
  }

  handleClick = () => {
    this.setState(({ currentPage }) => ({
      currentPage: currentPage + 1,
    }));
  };

  onChangeQuery = (query) => {
    this.setState({ searchQuery: query, currentPage: 1 });
    this.props.cleanState();
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.onChangeQuery} />
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
  fetchPosts: (searchQuery, currentPage) =>
    dispatch(postsOperations.fetchPosts(searchQuery, currentPage)),
  cleanState: () => dispatch(postsActions.cleanPosts()),
});

export default connect(null, mapDispatchToProps)(PostsApp);
