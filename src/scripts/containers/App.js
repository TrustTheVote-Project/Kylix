import React, { useState } from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import WizardFlow from './WizardFlow';
import DynamicFormFlow from './DynamicFormFlow';
import WelcomePage from './WelcomePage';
import AppStateContext from '../context/AppStateContext';

import '../../styles/index.scss';

const useAppState = () => {
  const [ballotUrl, setBallotUrl] = useState(null);
  return { ballotUrl, setBallotUrl };
};
export default function App() {
  const appState = useAppState();
  return (
    <AppStateContext.Provider value={appState}>
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
    </AppStateContext.Provider>
  );
}
