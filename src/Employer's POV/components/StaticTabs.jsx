import React, { useState } from "react";
import "../styles/StaticTabs.css";

const StaticTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-title ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>

      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default StaticTabs;