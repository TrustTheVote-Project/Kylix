import React from "react";
import { Link } from "react-router-dom";

const StepLink = ({ className, ...props }) => (
  <Link to={props.href} {...props}>
    {props.children}
  </Link>
);

export default StepLink;
