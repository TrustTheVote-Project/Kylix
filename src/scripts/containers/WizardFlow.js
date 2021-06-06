import React from 'react';
import {
  Switch, Route, useRouteMatch,
} from 'react-router-dom';
import Page from '../components/Page';
import {
  Download,
} from '../components/screens';

export default function WizardFlow() {
  return (
    <Page>
      <Download />
      <h2>Instructions for filling out your ballot</h2>
      <ol>
        <li>Download by clicking the link above</li>
        <li>Check to see if Adobe is downloaded</li>
        <li>...</li>
      </ol>
    </Page>
  );
}
