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
          <ul>
            <li><Link to="/wizard">Wizard Flow</Link></li>
            <li><Link to="/dynamic">Dynamic Form Flow</Link></li>
          </ul>
        </Route>
      </Switch>
    </Router>
  );
}
