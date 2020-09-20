// ./app.js
const fs = require("fs");
const path = require("path");
const express = require("express");
const expressOpenApi = require("express-openapi");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const router = require("express").Router();
const yaml = require("js-yaml");
// const swaggerDocument = require(path.resolve(
//   __dirname,
//   "../schema/v1/api-doc.yml"
// ));
// const ymlFiles = require(path.resolve(__dirname, "../schema/**/*.yml"));

const app = express();
const port = 3001;

// app.use("/api-docs", apiDocs);
// const swaggerSpec = swaggerJSDoc({
//   // import swaggerDefinitions
//   swaggerDocument,
//   // path to the API docs
//   apis: [ymlFiles],
// });
// app.use("/api-browser", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// app.use("/api-schema", express.static(path.join(__dirname, "../schema")));

expressOpenApi.initialize({
  app,
  // apiDoc: fs.readFileSync(
  //   path.resolve(__dirname, "../schema/v1/api-doc.yml"),
  //   "utf8"
  // ),
  apiDoc: "http://localhost:3000/api-docs/api-doc",
  docsPath: ""
  operations: {
    getPing: function (req, res) {
      res.send(true);
    },
    postVoterLookup: function (req, res) {
      res.send(true);
    },
  },
});

app.listen(port, (err, success) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`\nKylix mock server running at http://localhost:${port}`);
    console.log(`Verify at http://localhost:${port}/v1/ping\n`);
  }
});
