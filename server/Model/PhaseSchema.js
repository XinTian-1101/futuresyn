const mongoose = require("mongoose");
const { Schema } = mongoose;

const PhaseSchema = new Schema({
    title: { type: String, required: true },
    duration: { type: String, required: true },
    description: { type: String, required: true },
});

module.exports = mongoose.model("Phase",PhaseSchema);