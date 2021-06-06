import React from 'react';
import PropTypes from 'prop-types';
import PageContent from './PageContent';
import PageHeader from './PageHeader';
import PageWrapper from './PageWrapper';

export default function Page({ children }) {
  return (
    <PageWrapper>
      <PageHeader />
      <PageContent>
        {children}
      </PageContent>
    </PageWrapper>
  );
}

Page.propTypes = {
  children: PropTypes.element.isRequired,
};
