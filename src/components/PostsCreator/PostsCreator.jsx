import React, { Component } from "react";
import { connect } from "react-redux";
import shortid from "shortid";

import postsOperations from "../../redux/posts/posts-operations";

// import contactsOperations from "../../redux/contacts/contacts-operations";
// import contactsSelectors from "../../redux/contacts/contacts-selectors";

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
    const { title } = this.state;
    const { allPosts, onSubmit } = this.props;
    e.preventDefault();

    // allPosts.filter((post) => post.title === title).length > 0
    //   ? alert(`${title} is already in post-list`)
    //   : onSubmit(this.state);
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
// const mapStateToProps = (state) => ({
//   allContacts: contactsSelectors.getAllContacts(state),
// });

const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({ title, body }) =>
    dispatch(postsOperations.addPost({ title, body })),
});

export default connect(null, mapDispatchToProps)(PostsCreator);
