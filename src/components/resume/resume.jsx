import resumePath from "./resume-2023.pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "./resume.css";

// set worker path for PDF.js

const Resume = () => {
  return (
    <div id="resume">
      <div className="resume-container">
        <div className="resume-text">
          <p>RESUME</p>
          <div className="pdf-controls">
            <a
              href={resumePath}
              download="resume.pdf"
              className="resume-download-btn"
            >
              Download
            </a>
          </div>
        </div>

        <div className="pdf-viewer">
          <object
            data={resumePath}
            type="application/pdf"
            height={800}
            width={600}
          >
            <p>
              PDF failed to download, download locally{" "}
              <a href={resumePath}>DOWNLOAD</a>
            </p>
          </object>
        </div>
      </div>
    </div>
  );
};

export default Resume;
