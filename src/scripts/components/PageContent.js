import React from 'react';
import PropTypes from 'prop-types';

export default function PageContent({ children }) {
  return (
    <div className="kx-wrap ds-u-padding-top--3">
      {children}
    </div>
  );
}

PageContent.propTypes = {
  children: PropTypes.element.isRequired,
};
