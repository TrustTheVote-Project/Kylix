const express = require('express');
const _ = require('lodash');
const voterLookupMI = require('../../../api-docs/components/examples/voter-lookup--MI.json');

const router = express.Router();

router.post('/', (req, res) => {
  if (_.isEqual(req.body.VoterRecordsRequest, voterLookupMI.VoterRecordsRequest)) {
    res.status(200).json({ BallotUrl: 'http://mockurl.com/static/mock-ballots/michigan1.pdf' });
  }
  else {
    res.status(401).json({ message: 'invalid request' });
  }
});

module.exports = router;
