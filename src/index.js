import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import voteStore from "./store/votes-store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={voteStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
