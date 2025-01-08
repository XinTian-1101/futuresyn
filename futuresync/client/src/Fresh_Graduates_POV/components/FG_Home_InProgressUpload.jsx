import React, { useState } from "react";
import Swal from "sweetalert2";
import "../styles/InProgressUpload.css";

const FG_Home_InProgressUpload = () => {
  const [activePhase, setActivePhase] = useState("Phase 1");
  const [uploadedFileName, setUploadedFileName] = useState("");

  const handlePhaseClick = (phase) => {
    setActivePhase(phase);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFileName(file.name);
    }
  };

  const handleUpload = () => {
    if (uploadedFileName) {
      Swal.fire({
        icon: "success",
        title: "Submitted Successfully",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "No File Selected",
        text: "Please upload a file before clicking the Upload button.",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="upload-container">
      <h1 className="upload-title">Task Submission</h1>
      <h2 className="upload-subtitle">Dell database</h2>

      {/* Phase Tabs */}
      <div className="phase-tabs">
        {["Phase 1", "Phase 2", "Phase 3"].map((phase) => (
          <button
            key={phase}
            className={`phase-tab ${
              activePhase === phase ? "active-phase" : ""
            }`}
            onClick={() => handlePhaseClick(phase)}
          >
            {phase}
          </button>
        ))}
      </div>

      {/* Upload Section */}
      <div className="upload-box">
        {uploadedFileName ? (
          <div className="file-display">
            <span className="file-icon">📄</span>
            <span className="file-name">{uploadedFileName}</span>
          </div>
        ) : (
          <div className="upload-placeholder">
            <span className="upload-icon">📋</span>
            <p className="upload-heading">Upload Document</p>
            <label className="upload-link">
              <input
                type="file"
                accept=".pdf, .docx, .py, .txt"
                onChange={handleFileChange}
                hidden
              />
              Upload From Your Device
            </label>
          </div>
        )}
      </div>

      {/* Upload Button */}
      <div className="upload-footer">
        <button className="upload-button" onClick={handleUpload}>
          Upload
        </button>
      </div>
    </div>
  );
};

export default FG_Home_InProgressUpload;