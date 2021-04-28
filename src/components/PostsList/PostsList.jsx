import React from "react";
import PostsListItem from "./PostListItem/PostsListItem";
import { connect } from "react-redux";
import postsSelectors from "../../redux/posts/posts-selectors";

import styles from "./PostList.module.css";

const PostsList = ({ postsData, onDelete }) => {
  return (
    <ul className={styles.postsList}>
      {postsData.map((post) => (
        <PostsListItem
          key={post.id}
          postId={post.id}
          onDelete={post.onDelete}
          title={post.title}
          body={post.body}
          authorName={post.user.name}
          userName={post.user.username}
          postComments={post.comments}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  postsData: postsSelectors.getAllPosts(state),
});

export default connect(mapStateToProps, null)(PostsList);
