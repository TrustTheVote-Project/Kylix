import React from 'react';

const AppStateContext = React.createContext({
  ballotUrl: null,
  setBallotUrl: () => {},
});

export default AppStateContext;
