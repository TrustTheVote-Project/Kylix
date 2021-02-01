import React from 'react';
import StepList from '@cmsgov/design-system/dist/components/StepList/StepList';
import PropTypes from 'prop-types';
import StepLink from './StepLink';

const StepsGuide = ({ appState }) => {
  const steps = appState.steps.map((step) => ({
    ...step,
    component: StepLink,
  }));
  return <StepList steps={steps} />;
};

StepsGuide.propTypes = {
  appState: PropTypes.shape({
    steps: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      heading: PropTypes.string,
      description: PropTypes.string,
      started: PropTypes.boolean,
      completed: PropTypes.boolean,
      href: PropTypes.string,
    })),
  }).isRequired,
};

export default StepsGuide;
