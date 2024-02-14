import resumePath from "./resume-2024.pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "./resume.css";

const Resume = () => {
  return (
    <div id="resume">
      <div className="resume-container">
        <div className="resume-text">
          <p>RESUME</p>
        </div>

        <div className="pdf-viewer">
          <object
            data={resumePath}
            type="application/pdf"
            height="800"
            width="600"
          >
            <p>
              PDF failed to show, please download locally (:{" "}
              <a href={resumePath}>DOWNLOAD</a>
            </p>
          </object>
        </div>

        <div className="pdf-controls">
          <a
            href={resumePath}
            download="Resume-NathanHunter.pdf"
            className="resume-download-btn"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
