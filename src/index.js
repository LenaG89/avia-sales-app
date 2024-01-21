import React from "react";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
