const express = require('express');
const _ = require('lodash');
const voterLookupMI = require('../../../../api-docs/components/examples/voter-lookup--MI.json');

const router = express.Router();

router.post('/', (req, res) => {
  const { protocol } = req;
  const host = req.get('host');
  if (_.isEqual(req.body.VoterRecordsRequest, voterLookupMI.VoterRecordsRequest)) {
    res.status(200).json({ BallotUrl: `${protocol}://${host}/pdf/dummy-MI.pdf` });
  } else {
    res.status(401).json({ message: 'Pdf not found' });
  }
});

module.exports = router;
