import React from 'react';
import PropTypes from 'prop-types';

export default function PageWrapper({ children }) {
  return <div className="ds-base">{children}</div>;
}

PageWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};
