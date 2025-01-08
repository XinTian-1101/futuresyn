const mongoose = require("mongoose");
const { Schema } = mongoose;

const PhaseSchema = new Schema({
    title: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    description: { type: String, required: true },
});

module.exports = mongoose.model("Phase",PhaseSchema);