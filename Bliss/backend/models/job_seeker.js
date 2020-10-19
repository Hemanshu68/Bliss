const mongoose = require("mongoose");

const jobseekerSchema = new mongoose.Schema({
    googleId: { type: String, required: true },
    company: { type: String, required: true },
    education: { type: String, required: true },
    experience: { type: String, required: true },
    industry: { type: String, required: true },
    jobdescription: { type: String, required: true },
    jobid: { type: Number, required: true },
    joblocation_address: { type: String, required: true },
    jobtitle: { type: String, required: true },
    numberofpositions: { type: Number, required: true },
    payrate: { type: String, required: true },
    postdate: { type: Date, required: true },
    site_name: { type: String, required: true },
    skills: { type: String, required: true },
    uniq_id: { type: String, required: true },
});

const Jobseeker = mongoose.model("jobseeker", jobseekerSchema);

module.exports = Jobseeker;
