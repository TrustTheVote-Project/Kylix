import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';
import WizardFlow from './WizardFlow';
import '../../styles/index.scss';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/wizard">
          <WizardFlow />
        </Route>
        <Route exact path="/">
          <Link to="/wizard">Wizard Flow</Link>
        </Route>
      </Switch>
    </Router>
  );
}
