const ping = require('./routes/api/ping');
const voterLookupV1 = require('./routes/api/v1/voter-lookup');
const pdf = require('./routes/pdf');

module.exports = function useRoutes(app) {
  app.use('/api/ping', ping);
  app.use('/api/v1/voter-lookup', voterLookupV1);
  app.use('/pdf', pdf);
};
