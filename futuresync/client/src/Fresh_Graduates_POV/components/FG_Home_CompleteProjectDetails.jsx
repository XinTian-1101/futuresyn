import React from "react";
import { useParams } from "react-router-dom";
import { saveAs } from "file-saver";
import "../styles/completed.css";

import Certificate from "../../Images/certificate.jpg"; 

const completedDetails = [
  {
    id: 1,
    category: "Web Development",
    title: "Inventory Demand Forecasting",
    description:
      "Graduates analyzed Dell's historical inventory and sales data to build a demand forecasting model. This helped optimize stock levels, reduce overstocking, and prevent stockouts across various regions.",
    mentor: "John Doe (john.doe@dell.com)",
    submittedFiles: [
      { name: "Optimization_Report.pdf", date: "07/01/2025 6:15pm" },
      { name: "SQL Scripts (GitHub Link)" },
    ],
    certificateLink: Certificate,
  },
];

const FG_Home_CompleteProjectDetails = () => {
  const { id } = useParams();
  const project = completedDetails.find((task) => task.id === parseInt(id, 10));

  if (!project) {
    return <h2>Project not found</h2>;
  }

  const handleDownload = () => {
    saveAs(project.certificateLink, "Certificate.jpg"); 
  };

  return (
    <div className="detai ls-container">
      <button className="back-button" onClick={() => window.history.back()}>
        ← Back
      </button>
      <h1 className="details-category">{project.category}</h1>
      <h2 className="details-title">{project.title}</h2>
      <p className="details-description">
        <strong>Description:</strong> {project.description}
      </p>
      <p className="details-mentor">
        <strong>Mentor:</strong> {project.mentor}
      </p>

      <h3 className="details-subheader">Submitted Files</h3>
      <ul className="details-files">
        {project.submittedFiles.map((file, index) => (
          <li key={index} className="details-file">
            {file.name} {file.date && <span>({file.date})</span>}
          </li>
        ))}
      </ul>

      <h3 className="details-subheader">E-Certificate</h3>
      <button className="download-button" onClick={handleDownload}>
        Download
      </button>
    </div>
  );
};

export default FG_Home_CompleteProjectDetails;