import React from "react";
import PropTypes from "prop-types";

import styles from "./Button.module.css";

const Button = ({ onClick, text }) => {
  return (
    <button className={styles.btnComponent} type="button" onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
