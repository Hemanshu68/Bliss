const mongoose = require("mongoose");

const jobsSchema = new mongoose.Schema({
    googleId: { type: String, required: true },
    company: { type: String, required: true },
    experience: { type: String, required: true },
    joblocation_address: { type: String, required: true },
    jobtitle: { type: String, required: true },
    payrate: { type: String, required: true },
    skills: { type: String, required: true },
    uniq_id: { type: String, required: true },
});

const Jobs = mongoose.model("jobs", jobsSchema);

module.exports = Jobs;
