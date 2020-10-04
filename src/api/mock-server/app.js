/* eslint no-console: 0 */
const express = require('express');
const bodyParser = require('body-parser');
const useRoutes = require('./useRoutes');
const useApiDocs = require('./useApiDocs');

const port = 3000;
const app = express();

const startApp = async () => {
  app.use(bodyParser.json());
  useRoutes(app);
  await useApiDocs(app, port);
  app.listen(port, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`\nKylix api running at http://localhost:${port}`);
      console.log(`Docs at http://localhost:${port}/api-docs\n`);
      console.log(`Verify at http://localhost:${port}/ping\n`);
    }
  });
};

startApp();
