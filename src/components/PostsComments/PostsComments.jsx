import React, { Component } from "react";

import axios from "axios";

class PostsComments extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    const postId = this.props.postId;
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((res) => this.setState({ comments: res.data }));
  };

  render() {
    return (
      <ul>
        {this.state.comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.name}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default PostsComments;
