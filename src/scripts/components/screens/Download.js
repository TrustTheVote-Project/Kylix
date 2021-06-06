import React from 'react';

const mockServerPdf = '/pdf/ballot-MI.pdf';

export default function Download() {
  return (
    <div>
      <a href={mockServerPdf}>
        <p>Click to download pdf</p>
      </a>
    </div>
  );
}
