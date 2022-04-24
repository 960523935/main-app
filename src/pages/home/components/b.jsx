import React from "react";
import { a, b } from "./a.js";

export default () => {
  const { d } = require("./d");
  return (
    <div>
      b-{b}-{d}
    </div>
  );
};
