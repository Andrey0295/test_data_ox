import React from "react";
import PostsListItem from "./PostListItem/PostsListItem";
import { connect } from "react-redux";
import postsSelectors from "../../redux/posts/posts-selectors";
import postsOperations from "../../redux/posts/posts-operations";

import styles from "./PostList.module.css";

const PostsList = ({ postsData, onDelete, updatePost }) => {
  return (
    <ul className={styles.postsList}>
      {postsData.map((post) => (
        <PostsListItem
          key={post.id}
          postId={post.id}
          onDelete={onDelete}
          title={post.title}
          body={post.body}
          authorName={post.user.name}
          userName={post.user.username}
          postComments={post.comments}
          // handleSubmit={updatePost}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  postsData: postsSelectors.getVisiblePosts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: (postId) => dispatch(postsOperations.deletePost(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
