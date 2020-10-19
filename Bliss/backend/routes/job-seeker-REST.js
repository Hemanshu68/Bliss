const router = require("express").Router();
let jobseeker = require("../models/job_seeker");

router.post("/jobseekerss", (req, res) => {
    jobseeker.findOne({ googleId: req.body.googleId }, (err, result) => {
        if (err) throw err;
        if (result) return res.send(result);
        else {
            const newResult = new jobseeker({
                googleId: req.body.googleId,
                company: req.body.company,
                education: req.body.education,
                experience: req.body.experience,
                industry: req.body.industry,
                jobdescription: req.body.jobdescription,
                jobid: Number(req.body.jobid),
                joblocation_address: req.body.joblocation_address,
                jobtitle: req.body.jobtitle,
                numberofpositions: Number(req.body.numberofpositions),
                payrate: req.body.payrate,
                postdate: Date.parse(req.body.postdate),
                sitename: req.body.sitename,
                skills: req.body.skills,
                uniq_id: req.body.uniq_id,
            });
            newResult
                .save(newResult)
                .then((data) => {
                    res.send(data);
                })
                .catch((err) => {
                    res.status(500).send({ error: "Server error" });
                });
        }
    });
});

module.exports = router;
