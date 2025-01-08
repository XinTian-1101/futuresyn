import React from "react";
import StaticTabs from "../components/StaticTabs";
import "../styles/EM_Home.css";

const EM_Home = () => {

  const TabContent1 = () => (
    <div>
      <h2>Heading for Tab 1</h2>
      <p>This is the content of Tab 1, rendered as a React component.</p>
    </div>
  );

  const TabContent2 = () => (
    <div>
      <h2>Heading for Tab 2</h2>
      <p>This is the content of Tab 2, rendered as a React component.</p>
    </div>
  );

  const TabContent3 = () => (
    <div>
      <h2>Heading for Tab 3</h2>
      <p>This is the content of Tab 3, rendered as a React component.</p>
    </div>
  );

  const tabData = [
    { title: "Tab 1", content: <TabContent1 /> },
    { title: "Tab 2", content: <TabContent2 /> },
    { title: "Tab 3", content: <TabContent3 /> },
  ];

  return (
    <div>
      <h1>Welcome to the E_Home Page</h1>
      <StaticTabs tabs={tabData} />
    </div>
  );
};

export default EM_Home