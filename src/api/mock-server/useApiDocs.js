const path = require('path');

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const SwaggerParser = require('@apidevtools/swagger-parser');

const specPath = path.join(__dirname, '../api-docs/api-doc.yaml');

module.exports = async function useApiDocs(app) {
  const specObj = await SwaggerParser.bundle(specPath);
  const options = {
    swaggerDefinition: {
      ...specObj,
      servers: [
        {
          url: '/api',
          description: 'Mock server instance',
        },
      ],
    },
    apis: ['../api-docs/**/*.yaml'],
  };

  const swaggerSpec = swaggerJSDoc(options);

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
