/* eslint no-console: 0 */
const express = require('express');
const bodyParser = require('body-parser');
const useRoutes = require('./useRoutes');
const useApiDocs = require('./useApiDocs');

const apiServer = async (_app) => {
  const app = _app || express();
  app.use(bodyParser.json());
  useRoutes(app);
  await useApiDocs(app);
};

module.exports = apiServer;
