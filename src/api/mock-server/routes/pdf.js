const express = require('express');

const fs = require('fs');
const path = require('path');

const router = express.Router();

// dummy-pdf copied from
// https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf

router.get('/:pdfName', (req, res) => {
  const { pdfName } = req.params;
  const pathToFile = path.join(__dirname, `../pdf/${pdfName}`);
  try {
    const data = fs.readFileSync(pathToFile);
    res.contentType('application/pdf');
    res.send(data);
  } catch {
    res.status(404).json({ message: 'Pdf not found' });
  }
});

module.exports = router;
