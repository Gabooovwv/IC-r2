import React from "react";

import First from "./First";
import Second from "./Second";

import "./style.css";

export default function Element(props) {
  return (
    <div id="element">
      <First />
      <Second />
    </div>
  );
}
