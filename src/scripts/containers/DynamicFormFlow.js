import React from 'react';
import {
  Switch, Route, useRouteMatch,
} from 'react-router-dom';
import useAppState from '../hooks/useAppState';
import AppStateContext from '../context/AppStateContext';
import StepsGuide from '../components/StepsGuide';
import {
  Download, FillOut, Info, Home,
} from '../components/screens';

export default function DynamicFormFlow() {
  const { path } = useRouteMatch();
  const appState = useAppState();
  return (
    <div>
      <AppStateContext.Provider value={appState}>
        <nav>
          <StepsGuide appState={appState} />
        </nav>
        <main id="kx-main">
          <Switch>
            <Route exact path={`${path}/info`}>
              <Info />
            </Route>
            <Route exact path={`${path}/download`}>
              <Download />
            </Route>
            <Route exact path={`${path}/fill-out`}>
              <FillOut />
            </Route>
            <Route exact path={path}>
              <Home />
            </Route>
          </Switch>
        </main>
      </AppStateContext.Provider>
    </div>
  );
}
