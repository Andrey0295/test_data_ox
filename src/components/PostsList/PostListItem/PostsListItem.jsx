import React from "react";

import PostsComments from "../../PostsComments/PostsComments";
import styles from "./PostListItem.module.css";

const PostsListItem = ({ title, body, onDelete, postId }) => {
  return (
    <li className={styles.postListItem}>
      <b>{title}</b>
      <p>{body}</p>
      <button type="button" onClick={() => onDelete(postId)}></button>
      <div>
        <b>Comments</b>
        <PostsComments postId={postId} />
      </div>
    </li>
  );
};

export default PostsListItem;
