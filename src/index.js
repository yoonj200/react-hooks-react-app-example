import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));
// render takes in 2 arguments
// React component to render (typically top-level App component)
// Dom element where we want RC to be rendered (usually div with ID of root)