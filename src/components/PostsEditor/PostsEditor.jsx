import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import shortid from "shortid";

import postsOperations from "../../redux/posts/posts-operations";
import postsSelectors from "../../redux/posts/posts-selectors";

import styles from "./PostEditor.module.css";

class PostsEditor extends Component {
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
    e.preventDefault();
    const { postId, onSubmit, onCloseModal } = this.props;
    const { title, body } = this.state;

    const updateData = {
      title: title,
      body: body,
      postId: postId,
    };

    onSubmit(updateData);
    onCloseModal();

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
        <input
          className={styles.formInput}
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

PostsEditor.propTypes = {
  postId: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  allPosts: postsSelectors.getAllPosts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (updateData) => dispatch(postsOperations.updatePosts(updateData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsEditor);
