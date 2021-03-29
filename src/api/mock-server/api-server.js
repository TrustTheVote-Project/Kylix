/* eslint no-console: 0 */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const useRoutes = require('./useRoutes');
const useApiDocs = require('./useApiDocs');

const apiServer = async (_app, _port) => {
  const app = _app || express();
  const port = _port || process.env.PORT || 5000;

  // const corsOptions = {
  //   origin: 'http://localhost:9000', // TODO: move client origin into config
  //   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  // }

  // app.use(cors(corsOptions))

  app.use(bodyParser.json());
  useRoutes(app);
  await useApiDocs(app, port);
};

module.exports = apiServer;
