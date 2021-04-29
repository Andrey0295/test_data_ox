import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import postsOperations from "../redux/posts/posts-operations";
import postsActions from "../redux/posts/posts-actions";

import Container from "./Container/Container";
import PostsList from "./PostsList/PostsList";
import SearchBar from "./SearchBar/SearchBar";
import PostCreator from "./PostsCreator/PostsCreator";
import Filter from "./Filter/Filter";

class PostsApp extends Component {
  state = {
    currentPage: 1,
    searchQuery: "",
  };
  componentDidMount() {
    const { fetchPosts } = this.props;
    const { searchQuery, currentPage } = this.state;

    fetchPosts(searchQuery, currentPage);
  }
  componentDidUpdate(prevProps, prevState) {
    const { currentPage, searchQuery } = this.state;
    const { fetchPosts } = this.props;
    if (
      prevState.currentPage !== currentPage ||
      prevState.searchQuery !== searchQuery
    ) {
      fetchPosts(searchQuery, currentPage);
    }
  }

  handleClick = () => {
    this.setState(({ currentPage }) => ({
      currentPage: currentPage + 1,
    }));
  };

  onChangeQuery = (query) => {
    const { cleanState } = this.props;
    this.setState({ searchQuery: query, currentPage: 1 });
    cleanState();
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.onChangeQuery} />
        <Container>
          <div>
            <h1>Hello Posts</h1>
          </div>
          <Filter />
          <PostCreator />
          <PostsList onDelete={() => {}} />
          <button type="button" onClick={this.handleClick}>
            Get More Posts
          </button>
        </Container>
      </>
    );
  }
}

PostsApp.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  cleanState: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: (searchQuery, currentPage) =>
    dispatch(postsOperations.fetchPosts(searchQuery, currentPage)),
  cleanState: () => dispatch(postsActions.cleanPosts()),
});

export default connect(null, mapDispatchToProps)(PostsApp);
