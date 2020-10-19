const router = require("express").Router();
let jobs = require("../models/job-s");

router.post("/jobs", (req, res) => {
    jobs.findOne({ googleId: req.body.googleId }, (err, result) => {
        if (err) throw err;
        if (result) return res.send(result);
        else {
            const newResult = new jobs({
                googleId: req.body.googleId,
                company: req.body.company,
                experience: req.body.experience,
                joblocation_address: req.body.joblocation_address,
                jobtitle: req.body.jobtitle,
                payrate: req.body.payrate,
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
