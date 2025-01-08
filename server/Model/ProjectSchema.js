const mongoose = require("mongoose");
const { Schema } = mongoose;
import "../Model/PhaseSchema";

const ProjectSchema = new Schema({
    projectId: { type: Schema.Types.ObjectId, required: true },
    title: { type: String, required: true },
    domain: { type: String, required: true },
    skills: { type: [String], required: true }, 
    description: { type: String, required: true },
    rules: { type: [String], required: true },
    criteria: { type: [String], required: true }, 
    award: { type: String, required: true },
    minCPGA: {type: FLOAT, required:true},
    educationLevel: { type: String, required: true },
    graduationYear: { type: String, required: true }, 
    taskPhase: { type: Number, required: true },
    phase: { type: [PhaseSchema], required: true}, 
    noParticipants: { type: Number, required: true }, 
});

module.exports = mongoose.model("Project", ProjectSchema);
