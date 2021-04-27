import React from "react";
import ReactDOM from "react-dom";

import Container from "./components/Container/Container";
import MyApp from "./components/MyApp";

// import "./index.css";

const App = () => {
  return (
    <Container>
      <MyApp />
    </Container>
  );
};

// export default App;

ReactDOM.render(<App />, document.getElementById("app"));
