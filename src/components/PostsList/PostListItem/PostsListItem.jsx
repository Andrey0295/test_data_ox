import React, { useState } from "react";
import PropTypes from "prop-types";

import PostsComments from "../../PostsComments/PostsComments";
import Overlay from "../../Overlay/Overlay";
import PostsEditor from "../../PostsEditor/PostsEditor";
import Button from "../../Button/Button";

import styles from "./PostListItem.module.css";

const PostsListItem = ({
  title,
  body,
  onDelete,
  postId,
  authorName,
  userName,

  postComments,
}) => {
  const [showComments, setShowComments] = useState(false);
  const [showEditor, setShowEditor] = useState(false);

  const openComments = () => {
    setShowComments(!showComments);
  };

  const toggleEditor = () => {
    setShowEditor(!showEditor);
  };

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
      <button
        style={{ backgroundColor: "red" }}
        type="button"
        onClick={() => onDelete(postId)}
      >
        Delete
      </button>
      <Button onClick={toggleEditor} text={"Update"} />

      <div>
        <Button onClick={openComments} text={"Comments"} />

        {showEditor && (
          <Overlay onClose={toggleEditor}>
            <PostsEditor postId={postId} onCloseModal={toggleEditor} />
          </Overlay>
        )}
        {showComments && <PostsComments comments={postComments} />}
      </div>
    </li>
  );
};

PostsListItem.propTypes = {
  title: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  postId: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  body: PropTypes.string,
  authorName: PropTypes.string,
  postComments: PropTypes.array,
};

PostsListItem.defaultProps = {
  body: "",
  authorName: "",
  postComments: [],
};

export default PostsListItem;
