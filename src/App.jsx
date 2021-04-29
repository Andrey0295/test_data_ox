import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "./redux/store";

import PostsApp from "./components/PostsApp";

const App = () => {
  return (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <PostsApp />
      </PersistGate>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
