const mongoose = require("mongoose");
const { Schema } = mongoose;
const Phase = require("./PhaseSchema")

const ProjectSchema = new Schema({
    title: { type: String, required: true },
    domain: { type: String, required: true },
    skills: { type: [String], required: true },
    description: { type: String, required: true },
    rules: { type: [String], required: true },
    criteria: { type: [String], required: true }, 
    award: { type: String, required: true },
    minCGPA: { type: Number, required: true },
    educationLevel: { type: String, required: true },
    graduationYear: { type: String, required: true }, 
    taskPhase: { type: Number, required: true },
    phase: [{ type: Schema.Types.ObjectId, ref: 'Phase' }],
    noParticipants: { type: Number, required: true }, 
});

module.exports = mongoose.model("Project", ProjectSchema);
