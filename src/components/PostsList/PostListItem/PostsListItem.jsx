import React, { useState } from "react";

import PostsComments from "../../PostsComments/PostsComments";
import styles from "./PostListItem.module.css";

const PostsListItem = ({ title, body, onDelete, postId }) => {
  const [showComments, setShowComments] = useState(false);
  const handleClick = () => {
    setShowComments(!showComments);
  };

  return (
    <li className={styles.postListItem}>
      <b>{title}</b>
      <p>{body}</p>
      <button type="button" onClick={() => onDelete(postId)}></button>
      <div>
        <button type="button" onClick={handleClick}>
          Comments
        </button>
        {showComments && <PostsComments postId={postId} />}
      </div>
    </li>
  );
};

export default PostsListItem;
