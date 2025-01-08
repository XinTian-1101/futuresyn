import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/completed.css";
import CompletedPhoto from "../Images/FGHomePhoto.png";

const completedTasks = [
  {
    id: 1,
    category: "Web Development",
    title: "Inventory Demand Forecasting",
    description:
      "Graduates analyzed Dell's historical inventory and sales data to build a demand forecasting model. This helped optimize stock levels, reduce overstocking, and prevent stockouts across various regions.",
    uploadedBy: "Dell Company",
  },
  {
    id: 2,
    category: "Data Structure",
    title: "Sentiment Analysis on Customer Feedback",
    description:
      "Participants developed a sentiment analysis tool to process customer reviews and feedback. The task aimed to identify positive, negative, and neutral sentiments to guide product development and customer service strategies.",
    uploadedBy: "Dell Company",
  },
];

const FG_Completed = () => {
  const navigate = useNavigate();

  const goToCompletedProjectDetails = (id) => {
    navigate(`/CompletedProject/${id}`);
  };

  return (
    <div className="completed-container">
      <div className="completed-header">
        <img
          src={CompletedPhoto} 
          alt="Completed Projects Banner"
          className="completed-banner"
        />
        <h1>Your Completed Projects</h1>
      </div>

      <div className="cards-container">
        {completedTasks.map((task) => (
          <div className="card" key={task.id}>
            <div className="card-category">{task.category}</div>
            <h2 className="card-title">{task.title}</h2>
            <p className="card-description">{task.description}</p>
            <p className="card-uploaded-by">Uploaded By {task.uploadedBy}</p>
            <div className="card-footer">
              <button
                className="view-button"
                onClick={() => goToCompletedProjectDetails(task.id)}
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FG_Completed;
