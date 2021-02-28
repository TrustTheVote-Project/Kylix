import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import useAppState from '../hooks/useAppState';
import AppStateContext from '../context/AppStateContext';
import StepsGuide from '../components/StepsGuide';
import {
  Download, FillOut, Info, Home,
} from '../components/screens';
import DemoHome from '../components/screens/DemoHome';
import '../../styles/index.scss';

export default function App() {
  const appState = useAppState();
  return (
    <AppStateContext.Provider value={appState}>
      <Router>
        <Switch>
          <Route path="/wizard">
            <nav>
              <StepsGuide appState={appState} />
            </nav>
            <main id="kx-main">
              <Switch>
                <Route path="/wizard/info">
                  <Info />
                </Route>
                <Route path="/wizard/download">
                  <Download />
                </Route>
                <Route path="/wizard/fill-out">
                  <FillOut />
                </Route>
                <Route path="/wizard">
                  <Home />
                </Route>
              </Switch>
            </main>
          </Route>
          <Route path="/">
            <DemoHome />
          </Route>
        </Switch>
      </Router>
    </AppStateContext.Provider>
  );
}
