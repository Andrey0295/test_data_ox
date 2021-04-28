import React from "react";

const styles = {
  header: {
    height: "2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "blue",
  },
};

const AppBar = () => {
  return <header style={styles.header}></header>;
};

export default AppBar;
