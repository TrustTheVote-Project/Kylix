/* eslint no-console: 0 */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const useRoutes = require('./useRoutes');
const useApiDocs = require('./useApiDocs');

const port = 3000;
const app = express();

const corsOptions = {
  origin: 'http://localhost:9000', // TODO: move client origin into config
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

const startApp = async () => {
  app.use(bodyParser.json());
  useRoutes(app);
  await useApiDocs(app, port);
  app.listen(port, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`\nKylix api running at http://localhost:${port}`);
      console.log(`\nDocs at http://localhost:${port}/api-docs`);
      console.log(`\nVerify at http://localhost:${port}/ping`);
    }
  });
};

startApp();
