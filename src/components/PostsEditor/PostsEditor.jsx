import React, { Component } from "react";
import { connect } from "react-redux";
import shortid from "shortid";

// import postsOperations from "../../redux/posts/posts-operations";
import postsOperations from "../../redux/posts/posts-operations";
import postsSelectors from "../../redux/posts/posts-selectors";

// import contactsOperations from "../../redux/contacts/contacts-operations";
// import contactsSelectors from "../../redux/contacts/contacts-selectors";

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
    const { title } = this.state;
    const { postId } = this.props;
    const { allPosts, onSubmit } = this.props;
    // const postId = this.props.allPosts.id;
    const updateData = {
      title: this.state.title,
      body: this.state.body,
      postId: postId,
    };

    onSubmit(updateData);

    // onSubmit(this.state);

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
const mapStateToProps = (state) => ({
  allPosts: postsSelectors.getAllPosts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (updateData) => dispatch(postsOperations.updatePosts(updateData)),
  // { title, body }
});

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: ({ title, body, postId }) =>
//     dispatch(postsOperations.updatePosts({ title, body, postId })),
//   // { title, body }
// });

export default connect(mapStateToProps, mapDispatchToProps)(PostsEditor);
// export default PostsEditor;
