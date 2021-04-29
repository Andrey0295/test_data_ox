import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import shortid from "shortid";

import postsOperations from "../../redux/posts/posts-operations";

import styles from "./PostCreator.module.css";

class PostsCreator extends Component {
  state = {
    title: "",
    body: "",
  };

  titleInputId = shortid.generate();
  bodyInputId = shortid.generate();

  onInputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onFormSubmit = (e) => {
    const { onSubmit } = this.props;
    e.preventDefault();

    onSubmit(this.state);

    this.setState({
      title: "",
      body: "",
    });
  };

  render() {
    const { title, body } = this.state;
    return (
      <form onSubmit={this.onFormSubmit} className={styles.createPostForm}>
        <label htmlFor={this.titleInputId}>Title</label>
        <input
          className={styles.formInput}
          type="text"
          name="title"
          value={title}
          onChange={this.onInputChange}
          id={this.titleInputId}
        />
        <label htmlFor={this.bodyInputId}>Body</label>
        <textarea
          className={styles.textField}
          type="text"
          name="body"
          value={body}
          onChange={this.onInputChange}
          id={this.bodyInputId}
        />
        <button type="submit" className={styles.submitBtn}>
          Add post
        </button>
      </form>
    );
  }
}

PostsCreator.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({ title, body }) =>
    dispatch(postsOperations.addPost({ title, body })),
});

export default connect(null, mapDispatchToProps)(PostsCreator);
