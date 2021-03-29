const express = require('express');
const path = require('path');
const apiServer = require('../api/mock-server/api-server');

const port = process.env.PORT || 5000; // this is the serverPort in dev as well

// elastic beanstalk invokes all processes with NODE_ENV='production'
const env = process.env.NODE_ENV || 'development';

const app = express();

const startServer = async () => {
  await apiServer(app, port);

  // only serve static files in prod
  // as we use webpack dev server for development
  if (env !== 'dev') {
  // Serve the static files from the React app
    app.use('/', express.static(path.join(__dirname, '../../dist')));

    // Handles any requests that don't match the ones above
    app.get('*', (req, res) => {
      res.sendFile(path.join(path.join(__dirname, '../../dist', 'index.html')));
    });
  }

  app.listen(port, (err) => {
    if (err) {
      console.log(err);
    } else {
      if (env !== 'dev') {
        console.log(`\nKylix running at http://localhost:${port}`);
      }
      console.log(`\nKylix api running at http://localhost:${port}/api`);
      console.log(`\nDocs at http://localhost:${port}/api-docs`);
      console.log(`\nVerify at http://localhost:${port}/api/ping`);
    }
  });
};

module.exports = startServer();
