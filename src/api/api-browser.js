import SwaggerUI from "swagger-ui";
import "swagger-ui/dist/swagger-ui.css";

const spec = require("./schema/v1/api-doc.yml");
const voterLookup = require("./schema/v1/components/schemas/VoterLookup.yml");

const ui = SwaggerUI({
  spec,
  dom_id: "#swagger",
});
