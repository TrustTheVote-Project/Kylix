import React from 'react';
import PropTypes from 'prop-types';

const DesignSystemWrapper = ({ children }) => (
  <div className="ds-base">
    <div className="wrap">
      {children}
    </div>
  </div>
);

DesignSystemWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DesignSystemWrapper;
