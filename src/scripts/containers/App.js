import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import WizardFlow from './WizardFlow';
import DynamicFormFlow from './DynamicFormFlow';

import '../../styles/index.scss';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/wizard">
          <WizardFlow />
        </Route>
        <Route path="/dynamic">
          <DynamicFormFlow />
        </Route>
        <Route exact path="/">
          <div className="wrap kx-wrap">
            <h1>Kylix Demo</h1>
            <h2>Links</h2>
            <ul>
              <li>
                <Link to="/wizard">Demo (Wizard Flow)</Link>
              </li>
              <li>
                <Link to="/dynamic">Demo (Dynamic Form)</Link>
              </li>
              <li>
                <Link to="/api-docs" target="_blank">API docs</Link>
              </li>
            </ul>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}
