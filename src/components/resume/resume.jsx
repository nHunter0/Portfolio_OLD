import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import resumePath from "./resume-2023_downloadtest.pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "./resume.css";

// set worker path for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div id="resume">
      <div className="resume-container">
        <div className="resume-text">
          <p>RESUME</p>
          <div className="pdf-controls">
            <button
              href={resumePath}
              download="resume.pdf"
              className="resume-download-btn"
            >
              Download
            </button>
          </div>
        </div>

        <div className="pdf-viewer">
          <Document
            file={resumePath}
            aria-hidden="true"
            renderTextLayer={false}
            height="100%"
          >
            <Page pageNumber={1} scale={width > 1500 ? 1.5 : 1} />
          </Document>
        </div>
      </div>
    </div>
  );
};

export default Resume;
