import React from "react";
import PostsListItem from "./PostListItem/PostsListItem";
import { connect } from "react-redux";
import postsSelectors from "../../redux/posts/posts-selectors";

import styles from "./PostList.module.css";

const PostsList = ({ postsData, onDelete }) => {
  return (
    <ul className={styles.postsList}>
      {postsData.map(({ id, title, body }) => (
        <PostsListItem
          key={id}
          postId={id}
          onDelete={onDelete}
          title={title}
          body={body}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  postsData: postsSelectors.getAllPosts(state),
});

export default connect(mapStateToProps, null)(PostsList);
