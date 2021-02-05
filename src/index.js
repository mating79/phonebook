import React from "react";
import { render } from "react-dom";
import "../node_modules/bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./style/style.css";
import App from "../src/App";
import GlobalState from "./GlobalState/GlobalState";
render(
  <GlobalState>
    <App />
  </GlobalState>,
  document.getElementById("root")
);
