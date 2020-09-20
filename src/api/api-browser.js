import SwaggerUI from "swagger-ui";
import "swagger-ui/dist/swagger-ui.css";

const spec = require("./schema/v1/api-doc.yml");

const ui = SwaggerUI({
  spec,
  dom_id: "#swagger",
});
