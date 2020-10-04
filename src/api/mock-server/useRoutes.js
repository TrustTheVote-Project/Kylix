const ping = require('./routes/ping');
const voterLookupV1 = require('./routes/v1/voter-lookup');

module.exports = function useRoutes(app) {
  app.use('/ping', ping);
  app.use('/v1/voter-lookup', voterLookupV1);
};
