/* eslint no-console: 0 */
const express = require('express');
const bodyParser = require('body-parser');
const useRoutes = require('./useRoutes');
const useApiDocs = require('./useApiDocs');

const apiServer = async (_app, _port) => {
  const app = _app || express();
  const port = _port || process.env.PORT || 5000;

  app.use(bodyParser.json());
  useRoutes(app);
  await useApiDocs(app, port);
};

module.exports = apiServer;
