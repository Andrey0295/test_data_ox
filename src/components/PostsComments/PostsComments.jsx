import React from "react";
import PropTypes from "prop-types";

const PostsComments = ({ comments }) => {
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <p>{comment.body}</p>
          <b>{comment.email}</b>
        </li>
      ))}
    </ul>
  );
};

PostsComments.propTypes = {
  comments: PropTypes.array,
};

PostsComments.defaultProps = {
  comments: [],
};

export default PostsComments;
