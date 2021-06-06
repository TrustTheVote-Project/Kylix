import React from 'react';
import DynamicForm from '../components/DynamicForm';
import PageHeader from '../components/PageHeader';

export default function DynamicFormFlow() {
  return (
    <div className="ds-base">
      <PageHeader />
      <div className="kx-wrap ds-u-padding-top--3">
        <DynamicForm />
      </div>
    </div>
  );
}
