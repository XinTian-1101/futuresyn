const Project = require('../Model/ProjectSchema');
const Phase = require("../Model/PhaseSchema")

exports.getProjects = async (req, res) => {
  try {
      const projects = await Project.find().populate('phases');
      res.json(projects);
  } catch (err) {
      console.error("Error fetching properties:", err);
      res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.addProject = async (req, res) => {
    console.log('Request body:', req.body); 
    try {
        const {
            title,
            domain,
            skills,
            description,
            rules,
            criteria,
            award,
            minCGPA,
            educationLevel,
            graduationYear,
            taskPhase,
            phases,
            noParticipants,
        } = req.body;

        if (!title || !domain || !skills || !description || !rules || !criteria || !award || !minCGPA || !educationLevel || !graduationYear || !taskPhase || !phases || !noParticipants) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const phaseDocs = await Promise.all(
            phases.map(async (phase) => {
                const newPhase = new Phase({
                    title: phase.title,
                    startDate: new Date(phase.startDate),
                    endDate: new Date(phase.endDate),
                    description: phase.description,
                });
                return await newPhase.save();
            })
        );

        const newProject = new Project({
            title,
            domain,
            skills: skills.join(", "), 
            description,
            rules,
            criteria,
            award,
            minCGPA,
            educationLevel,
            graduationYear,
            taskPhase,
            phase: phaseDocs.map((phase) => phase._id), 
            noParticipants,
        });

        const savedProject = await newProject.save();

        res.status(201).json({
            message: "Project successfully created",
            project: savedProject,
        });
    } catch (error) {
        console.error("Error creating project:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};