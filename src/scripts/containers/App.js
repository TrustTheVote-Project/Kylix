import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import WizardFlow from './WizardFlow';
import DynamicFormFlow from './DynamicFormFlow';
import WelcomePage from './WelcomePage';

import '../../styles/index.scss';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/wizard">
          <WizardFlow />
        </Route>
        <Route path="/find">
          <DynamicFormFlow />
        </Route>
        <Route path="/welcome">
          <WelcomePage />
        </Route>
        <Route exact path="/">
          <WelcomePage />
        </Route>
      </Switch>
    </Router>
  );
}
