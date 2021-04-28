import React, { Component } from "react";
import axios from "axios";

class PostsAuthors extends Component {
  state = {
    authors: [],
  };

  componentDidMount() {
    this.fetchAuthors();
  }

  fetchAuthors = () => {
    const authorId = this.props.authorId;
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${authorId}`)
      .then((res) => this.setState({ authors: res.data }));
  };

  render() {
    return <div></div>;
  }
}

export default PostsAuthors;
