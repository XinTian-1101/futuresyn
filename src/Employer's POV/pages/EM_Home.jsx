import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StaticTabs from "../components/StaticTabs";
import ProjectCard from "../components/ProjectCard";
import "../styles/EM_Home.css";

const EM_Home = () => {

    const [projectList, setProjectList] = useState([]);

    const [openProjects, setOpenProjects] = useState([]);
    const [progressProjects, setProgressProjects] = useState([]);
    const [judgeProjects, setJudgeProjects] = useState([]);
    const [certProjects, setCertProjects] = useState([]);
    const [inactiveProjects, setInactiveProjects] = useState([]);

    // useEffect(() => {
    //     const fetchProjects = async () => {
    //         try {
    //             const response = await axios.get("/api/employer/project/get");
    //             setProjectList(response.data);
    //         } catch (error) {
    //             console.error("Error fetching projects:", error);
    //         }
    //     };
    //     fetchProjects();
    // }, []);

    useEffect(() => {
        groupProjects();
    }, [projectList]);

    const groupProjects = () => {
        const groupProjectData = projectList.map((project) => ({
            category: project.domain,
            title: project.title,
            description: project.description,
            participants: `${project.noParticipants} Participants`,
            status: project.status,
        }));

        setOpenProjects(groupProjectData.filter((p) => p.status === "OPEN"));
        setProgressProjects(groupProjectData.filter((p) => p.status === "INPROGRESS"));
        setJudgeProjects(groupProjectData.filter((p) => p.status === "JUDGING"));
        setCertProjects(groupProjectData.filter((p) => p.status === "CERT"));
        setInactiveProjects(groupProjectData.filter((p) => p.status === "INACTIVE"));
    };

    // useEffect(() => {
    //     const fetchProjects = async () => {
    //         try {
    //             const response = await axios.get("/api/employer/project/get");
    //             setProjectList(response.data);
    //         } catch (error) {
    //             console.error("Error fetching projects:", error);
    //         }
    //     };
    //     fetchProjects();
    // }, []);

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
        {
            category: "Machine Learning",
            title: "Image Classification with Convolutional Neural Networks",
            description:
                "Develop a machine learning model using Convolutional Neural Networks (CNNs) to classify product images into categories. This project involves pre-processing images, training the CNN model, and evaluating its performance on a test dataset.",
            uploadedBy: "Dell Company",
            participants: "15 Participants",
        }
    ];

    const TabContent1 = () => (
        <div className="projectCardsContainer">
            <ProjectCard projectData={cardsData[0]} status={"OPEN"} />
        </div>
    );

    const TabContent2 = () => (
        <div className="projectCardsContainer">
            <ProjectCard projectData={cardsData[1]} status={"INPROGRESS"} />
        </div>
    );

    const TabContent3 = () => (
        <div className="projectCardsContainer">
            <ProjectCard projectData={cardsData[2]} status={"JUDGING"} />
        </div>
    );

    const TabContent4 = () => (
        <div className="projectCardsContainer">
            <ProjectCard projectData={cardsData[3]} status={"CERT"} />
        </div>
    );

    const TabContent5 = () => (
        <div className="projectCardsContainer">
            <ProjectCard projectData={cardsData[4]} status={"INACTIVE"} />
        </div>
    );

    const tabData = [
        { title: "Enrollment Open", content: <TabContent1 /> },
        { title: "In Progress", content: <TabContent2 /> },
        { title: "Judging Required", content: <TabContent3 /> },
        { title: "Certificates Pending", content: <TabContent4 /> },
        { title: "Inactive", content: <TabContent5 /> },
    ];

    const nav = useNavigate();

    const handleSubmit = () => {
        nav('/EM_AddForm');
    };

    return (
        <div className="emHomeContainer">
            <StaticTabs tabs={tabData} />
            <div className="addButtonContainer">
                <button
                    className="view-button"
                    onClick={handleSubmit}>
                    +
                </button>
            </div>
        </div>
    );
};

export default EM_Home