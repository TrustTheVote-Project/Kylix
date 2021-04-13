const express = require('express');
const path = require('path');
const apiServer = require('../api/mock-server/api-server');

const port = process.env.PORT || 5000; // this is the serverPort in dev as well
const webPort = process.env.WEB_PORT || 9000;

// elastic beanstalk invokes all processes with NODE_ENV='production'
const env = process.env.NODE_ENV || 'development';

const app = express();

const startServer = async () => {
  await apiServer(app);

  // only serve static files in prod
  // as we use webpack dev server for development
  if (env === 'production') {
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
      const isProd = env === 'production';
      if (isProd) {
        console.log(`\nKylix running at http://localhost:${port}`);
      }
      const serverUrl = `http://localhost:${port}`;
      const webUrl = isProd ? serverUrl: `http://localhost:${webPort}`;
      console.log(`\nKylix api running at ${webUrl}/api`);
      console.log(`\nDocs at ${webUrl}/api-docs`);
      console.log(`\nVerify at ${webUrl}/api/ping`);
      if (env === 'development') {
        console.log('Make sure you are running webpack');
        console.log(`Webpack proxies server requests from ${webUrl} to ${serverUrl}`);
      }
    }
  });
};

module.exports = startServer();
