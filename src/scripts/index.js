import React from "react";
import ReactDOM from "react-dom";

import { KylixStepList } from "./components";

const Example = function () {
  return <KylixStepList />;
};

ReactDOM.render(<Example />, document.querySelector("#jsx-root"));
