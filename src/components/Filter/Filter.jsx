import React from "react";
// import PropTypes from "prop-types";
// import shortid from "shortid";
import { connect } from "react-redux";

import postsActions from "../../redux/posts/posts-actions";
import postsSelectors from "../../redux/posts/posts-selectors";

import styles from "./Filter.module.css";

const Filter = ({ filterValue, onChangeFilter }) => {
  //   const filterInputId = shortid.generate();
  return (
    <>
      <label className={styles.filterLabel} htmlFor="11">
        Find posts by author user-name
      </label>
      <input
        className={styles.filterInput}
        type="text"
        value={filterValue}
        onChange={onChangeFilter}
        id="11"
      />
    </>
  );
};

// Filter.propTypes = {
//   filterValue: PropTypes.string,
//   onChangeFilter: PropTypes.func.isRequired,
// };

// Filter.defaultProps = {
//   filterValue: "",
// };

const mapStateToProps = (state) => ({
  filterValue: postsSelectors.getFilterValue(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFilter: (event) =>
    dispatch(postsActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
