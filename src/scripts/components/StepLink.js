import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StepLink = ({ className, href, children }) => (
  <Link to={href} className={className}>
    {children}
  </Link>
);

StepLink.propTypes = {
  className: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default StepLink;
