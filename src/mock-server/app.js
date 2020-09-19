// ./app.js
const fs = require("fs");
const path = require("path");
const express = require("express");
const expressOpenApi = require("express-openapi");

const app = express();
const port = 3000;

expressOpenApi.initialize({
  app,
  apiDoc: fs.readFileSync(
    path.resolve(__dirname, "../api/v1/kylix-api.yml"),
    "utf8"
  ),
  operations: {
    getPing: function (req, res) {
      res.send(true);
    },
  },
});

app.listen(port, (err, success) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`\nKylix mock server running at http://localhost:${port}`);
    console.log(`Verify at http://localhost:${port}/ping\n`);
  }
});
