const express = require("express");
const path = require("path");
const fs = require("fs");

const bodyParser = require("body-parser");
const http = require("http");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const yaml = require("js-yaml");
const SwaggerParser = require("@apidevtools/swagger-parser");

const port = 3000;
// Create global app objects
const app = express();
const router = require("express").Router();

const specPath = path.join(__dirname, "../api-docs/api-doc.yaml");

const runapp = async () => {
  const specObj = await SwaggerParser.bundle(specPath);
  // const specObj = yaml.safeLoad(fs.readFileSync(specPath, "utf8"));

  // options for the swagger docs
  const options = {
    // import swaggerDefinitions
    swaggerDefinition: specObj,
    // path to the API docs
    apis: ["../api-docs/**/*.yaml"],
  };

  // initialize swagger-jsdoc
  const swaggerSpec = swaggerJSDoc(options);

  // use swagger-Ui-express for your app documentation endpoint
  // app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.listen(port, (err, success) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`\nKylix mock server running at http://localhost:${port}`);
      console.log(`Verify at http://localhost:${port}/v1/ping\n`);
    }
  });
};

runapp();
// router.get("/api-docs", swaggerUi.setup(swaggerSpec));

// const express = require("express");
// const path = require("path");
// const bodyParser = require("body-parser");
// const http = require("http");
// const app = express();

// // 1. Import the express-openapi-validator library
// const { OpenApiValidator } = require("express-openapi-validator");

// // 2. Set up body parsers for the request body types you expect
// //    Must be specified prior to endpoints in 5.
// app.use(bodyParser.json());
// app.use(bodyParser.text());
// app.use(bodyParser.urlencoded({ extended: false }));

// const specPath = path.join(__dirname, "../api-docs/api-doc.yaml");
// // 3. (optionally) Serve the OpenAPI spec
// app.use("/api-spec", express.static(specPath));

// // 4. Install the OpenApiValidator onto your express app
// new OpenApiValidator({
//   apiSpec: "../api-docs/api-doc.yaml",
//   validateResponses: true, // <-- to validate responses
//   // unknownFormats: ['my-format'] // <-- to provide custom formats
// })
//   .install(app)
//   .then(() => {
//     app.get("/v1/ping", function (req, res, next) {
//       res.json([
//         { id: 1, name: "pinged" },
//         { id: 2, name: "pinged" },
//       ]);
//     });

//     app.post("/v1/voter-lookup", function (req, res, next) {
//       res.json({ name: "voter-lookup" });
//     });

//     // 6. Create an Express error handler
//     app.use((err, req, res, next) => {
//       // 7. Customize errors
//       console.error(err); // dump error to console for debug
//       res.status(err.status || 500).json({
//         message: err.message,
//         errors: err.errors,
//       });
//     });

//     http.createServer(app).listen(3000);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// // const fs = require("fs");
// // const path = require("path");
// // const express = require("express");
// // const router = require("express").Router();
// // const expressOpenApi = require("express-openapi");
// // const swaggerUi = require("swagger-ui-express");
// // const swaggerJSDoc = require("swagger-jsdoc");
// // const yaml = require("js-yaml");

// // const app = express();
// // const port = 3000;

// // const apiDocs = router.get("*", function (req, res, next) {
// //   var requestPath = req.path;
// //   try {
// //     const ymlPath = path.join(__dirname, "../api-docs", `${requestPath}.yml`);
// //     const ymlObj = yaml.safeLoad(fs.readFileSync(ymlPath, "utf8"));
// //     return res.send(ymlObj);
// //   } catch (e) {
// //     try {
// //       const jsonPath = path.join(
// //         __dirname,
// //         "../api-docs",
// //         `${requestPath}.json`
// //       );
// //       const jsonObj = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
// //       return res.send(jsonObj);
// //     } catch (e) {
// //       res.status(404).send();
// //     }
// //   }
// // });

// // app.use("/api-docs", apiDocs);
