import React, { useState } from "react";

import PostsComments from "../../PostsComments/PostsComments";
import Overlay from "../../Overlay/Overlay";
import PostsEditor from "../../PostsEditor/PostsEditor";
import styles from "./PostListItem.module.css";

const PostsListItem = ({
  title,
  body,
  onDelete,
  postId,
  authorName,
  userName,
  // handleSubmit,

  postComments,
}) => {
  const [showComments, setShowComments] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const handleClick = () => {
    setShowComments(!showComments);
  };
  const openEditor = () => {
    setShowEditor(!showEditor);
  };

  // const handlePostData = (data) => {
  //   const post = {
  //     id: postId,
  //     title: data.title,
  //     body: data.body,
  //   };
  //   return post;
  // };

  return (
    <li className={styles.postListItem}>
      <b>{title}</b>
      <p>{body}</p>
      <p>
        Name: <span>{authorName}</span>
      </p>
      <p>
        User-name: <span>{userName}</span>
      </p>
      <button type="button" onClick={() => onDelete(postId)}>
        Delete
      </button>
      <button type="button" onClick={openEditor}>
        Update
      </button>
      <div>
        <button type="button" onClick={handleClick}>
          Comments
        </button>

        {showEditor && (
          <Overlay onClose={openEditor}>
            <PostsEditor postId={postId} />
          </Overlay>
        )}
        {showComments && <PostsComments comments={postComments} />}
      </div>
    </li>
  );
};

export default PostsListItem;
