import React, { useState, useEffect } from "react";
import StaticTabs from "../components/StaticTabs";
import ProjectCard from "../components/ProjectCard";
import "../styles/EM_Home.css";

const EM_Home = () => {

    const [projectList, setProjectList] = useState([]);

    let [openProjects, setOpenProjects] = useState([]);
    let [progressProjects, setProgressProjects] = useState([]);
    let [judgeProjects, setJudgeProjects] = useState([]);
    let [certProjects, setCertProjects] = useState([]);
    let [inactiveProjects, setInactiveProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
          try {
            const response = await axios.get('/api/employer/project/get'); 
            setProjectList(response.data);
          } catch (error) {
            console.error('Error fetching projects:', error);
          }
        };
        fetchProjects();
      }, []);
    
      useEffect(() => {
        groupProjects();
      }, [projectList]);
    
      const groupProjects = () => {
        const mappedProjectData = projectList.map(project => ({
          projectId: property._id,
          cardTitle1: `RM ${property.price} Per Month`,
          cardTitle2: property.name,
          cardText: property.address,
          roomDetails: [property.bedroom, property.bathroom, `${property.buildUpSize}sf`],
          propertyType: property.type,
          location: property.location,
          priceRange: determinePriceRange(property.price)
        }));
        setCardData(mappedCardData);
    
        const uniqueLocations = [...new Set(projectList.map(property => property.location))];
        setLocations(["All Location", ...uniqueLocations]);
      };

    const cardsData = [
        {
            category: "MySQL Database",
            title: "Dell database",
            description:
                "Design and implement a relational database for Dell's e-commerce platform, capable of handling large-scale product data, customer information, and real-time transactions.",
            uploadedBy: "Dell Company",
            participants: "10 Participants",
        },
        {
            category: "Data Analyst",
            title: "Predictive Analytics for Customer Retention",
            description:
                "Develop a predictive model to identify customers at risk of churn. Analyze historical data and create a machine learning solution to predict customer behavior, enabling Dell to implement proactive retention strategies.",
            uploadedBy: "Dell Company",
            participants: "10 Participants",
        },
        {
            category: "Data Structure",
            title: "Cloud Infrastructure Cost Optimization",
            description:
                "Analyze Dell's cloud usage data and propose cost-saving measures. The task involves identifying inefficiencies in cloud resource allocation and suggesting optimizations for better cost management.",
            uploadedBy: "Dell Company",
            participants: "10 Participants",
        },
        {
            category: "Web Development",
            title: "Interactive Dashboard for Sales Performance Monitoring",
            description:
                "Design and develop an interactive dashboard to visualize Dell's sales performance data. The dashboard should include KPIs like revenue, sales growth, and regional performance trends.",
            uploadedBy: "Dell Company",
            participants: "10 Participants",
        },
    ];

    const TabContent1 = () => (
        <div className="projectCardsContainer">
            {cardsData.map((card, index) => {
    return (
        <ProjectCard
            key={index}
            category={card.category}
            title={card.title}
            description={card.description}
            uploadedBy={card.uploadedBy}
            participants={card.participants}
        />
    );
})}

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