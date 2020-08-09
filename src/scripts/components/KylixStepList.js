import React from "react";
// import PropTypes from "prop-types";
import StepList from "@cmsgov/design-system/dist/components/StepList/StepList";
// import { Alert } from "@cmsgov/design-system";

const Link = ({ className, ...props }) => (
  // <Link to={props.href} {...props}>{props.children}</Link>
  <a className="special-link" {...props}>
    {props.children}
  </a>
);
const AddressLink = ({ className, ...props }) => (
  // <Link to={props.href} {...props}>{props.children}</Link>
  <a className="address-link" {...props}>
    {props.children}
  </a>
);

const Address = ({ street, city, state }) => {
  return (
    <div>
      <p>123 Main Street</p>
      <p>Springfield, IL</p>
    </div>
  );
};
// Link.propTypes = { children: PropTypes.node };

export const KylixStepList = function () {
  return (
    <div>
      <StepList
        steps={[
          {
            id: "address",
            heading: "Enter your address",
            description: <Address />,
            href: "#step-1",
            started: true,
            completed: true,
          },
          {
            id: "download",
            heading: "Download your pdf ballot",
            href: "#step-2",
            started: true,
            completed: false,
          },
          {
            id: "fill-out",
            heading: "Fill out and print",
            description: "Fill out your ballot using Adobe software and print",
            href: "#step-3",
            started: false,
            completed: false,
          },
        ]}
      ></StepList>
    </div>
  );
};

export default KylixStepList;
