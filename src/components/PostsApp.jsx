import React, { Component } from "react";
import Container from "./Container/Container";
import PostsList from "./PostsList/PostsList";
import axios from "axios";

class PostsApp extends Component {
  state = {
    posts: [],
    isLoading: false,
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    this.fetchPosts();
  }

  fetchPosts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10")
      .then((res) => {
        this.setState({ posts: res.data });
        console.log(res.data);
      })
      .finally(this.setState({ isLoading: false }));
  };
  render() {
    return (
      <Container>
        <div>
          <h1>Hello Posts</h1>
        </div>
        {!this.state.isLoading && (
          <PostsList postsData={this.state.posts} onDelete={() => {}} />
        )}
      </Container>
    );
  }
}

export default PostsApp;
