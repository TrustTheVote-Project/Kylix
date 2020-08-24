import React from "react";
import pdfUrl from "../../../pdf/Kylix-example-pdf.pdf";

export default function Download() {
  return (
    <div>
      <a href={pdfUrl}>
        <p>Click to download pdf</p>
      </a>
    </div>
  );
}
