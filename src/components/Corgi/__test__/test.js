import React from "react";
import ReactDOM from "react-dom";
import Corgi from "../index";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Corgi />, div);
});
