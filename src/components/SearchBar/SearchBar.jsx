import React, { Component } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

import styles from "./SearchBar.module.css";

class SearchBar extends Component {
  state = {
    query: "",
  };

  handleSearchInputChange = (e) => {
    const { value } = e.currentTarget;
    this.setState({
      query: value,
    });
  };

  handleSubmit = (e) => {
    const { onSubmit } = this.props;
    const { query } = this.state;
    e.preventDefault();

    onSubmit(query);

    this.setState({ query: "" });
  };

  render() {
    const searchInputId = shortid.generate();
    const { query } = this.state;
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <label htmlFor={searchInputId}></label>
          <input
            className={styles.SearchFormInput}
            type="text"
            value={query}
            onChange={this.handleSearchInputChange}
            id={searchInputId}
            placeholder="Search posts"
            autoFocus
          />
          <button className={styles.SearchFormButton} type="submit">
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
