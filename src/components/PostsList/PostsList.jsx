import React from "react";
import PostsListItem from "./PostListItem/PostsListItem";

import styles from "./PostList.module.css";

// import { connect } from "react-redux";

// import contactsOperations from "../../redux/contacts/contacts-operations";
// import contactsSelectors from "../../redux/contacts/contacts-selectors";

// import ContactListItem from "./ContactListItem/ContactListItem";

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

export default PostsList;

// const mapStateToProps = (state) => ({
//   contactsData: contactsSelectors.getVisibleContacts(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   onDelete: (contactId) =>
//     dispatch(contactsOperations.deleteContact(contactId)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
