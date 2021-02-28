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
import '../../styles/index.scss';

export default function App() {
  const appState = useAppState();
  return (
    <AppStateContext.Provider value={appState}>
      <Router>
        <nav>
          <StepsGuide appState={appState} />
        </nav>
        <main id="kx-main">
          <Switch>
            <Route path="/info">
              <Info />
            </Route>
            <Route path="/download">
              <Download />
            </Route>
            <Route path="/fill-out">
              <FillOut />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
    </AppStateContext.Provider>
  );
}
