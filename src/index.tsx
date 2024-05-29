import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import QueryWrapper from "./providers/QueryWrapper";

ReactDOM.render(
  <React.StrictMode>
    <QueryWrapper>
      <App />
    </QueryWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
