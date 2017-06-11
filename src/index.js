import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

if (process.env.NODE_ENV !== "production") {
  // Perf tool to check for unnecessary re-renderings
  const { whyDidYouUpdate } = require("why-did-you-update");
  whyDidYouUpdate(React);
}

ReactDOM.render(<App />, document.getElementById("root"));
