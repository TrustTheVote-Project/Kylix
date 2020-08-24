import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import StepList from "@cmsgov/design-system/dist/components/StepList/StepList";
import { useAppState } from "../hooks";
import { AppStateContext } from "../context";
import { StepsGuide } from "../components";
import { Address, Download, FillOut, Info, Home } from "../components/screens";
import "../../styles/index.scss";

export default function App() {
  const appState = useAppState();
  return (
    <AppStateContext.Provider value={appState}>
      <Router hashType="noslash">
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
