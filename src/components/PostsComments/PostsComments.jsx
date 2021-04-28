import React from "react";

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

export default PostsComments;
