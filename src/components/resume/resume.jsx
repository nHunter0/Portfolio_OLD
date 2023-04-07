import "./resume.css";

const resume = () => {
  const resumePath = "../../../assets/resume-2023_downloadtest.pdf";
  return (
    <div id="resume">
      <div className="resume-container">
        <div className="resume-text">
          <p>RESUME</p>
        </div>
        <div class="pdf-viewer">
          <object data={resumePath} type="application/pdf">
            <p>
              {" "}
              SORRY, PDF of resume cannot be displayed.{" "}
              <a href={resumePath} download>
                Download
              </a>{" "}
              instead.
            </p>
          </object>
        </div>
        <div className="resume-download">
          <a href={resumePath} download>
            <button className="resume-download-btn"> Download </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default resume;
