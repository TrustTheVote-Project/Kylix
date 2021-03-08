import React from 'react';
import DynamicForm from '../components/DynamicForm';

export default function DynamicFormFlow() {
  return (
    <div className="ds-base">
      <header className="ds-base--inverse ds-u-padding--3 ds-u-display--flex ds-u-justify-content--between ds-u-align-items--center">
        <h1 className="ds-h3 ds-u-margin-bottom--0">Kylix</h1>
      </header>
      <div className="kx-wrap ds-u-padding-top--3">
        <DynamicForm />
      </div>
    </div>
  );
}
