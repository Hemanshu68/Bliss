const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieSession = require("cookie-session");
const passportRoutes = require("./routes/passport-routes");
// const port = process.env.PORT || 5000;
const cookieParser = require("cookie-parser");
// const expressSession = require("express-session");
const authService = require("./Services/AuthService");

mongoose
    .connect(
        "mongodb+srv://bliss:phns1234@cluster0.voijr.mongodb.net/test?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        }
    )
    .then(
        () => {
            console.log("connected to atlas");
        },
        (err) => console.log(err)
    );

require("./config/passport-setup");
const dbconfig = require("./config/dbconfig");

app.use(
    cors({
        origin: "http://localhost:5000", // allow to server to accept request from different origin
        credentials: true,
    })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(
//     expressSession({
//         secret: "asdfa",
//         saveUninitialized: true,
//         resave: false,
//     })
// );
app.use(
    cookieSession({
        name: "session",
        keys: ["SECRECT KEY"],
        maxAge: 24 * 60 * 60 * 1000,
    })
);

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
    console.log(req.session);
    if (req.session.token) {
        res.cookie("token", req.session.token);
        res.json({
            status: "session cookie set",
        });
    } else {
        res.cookie("token", "");
        res.json({
            status: "session cookie not set",
        });
    }
});

app.get(
    "/auth/google",
    passport.authenticate("google", {
        scope: [
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email",
        ],
    })
);

app.get(
    "/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get("/logout", (req, res) => {
    req.session = null;
    req.logout();
    res.redirect("/");
});

app.get(
    "/google/callback",
    passport.authenticate("google", {
        failureRedirect: "http://localhost:5000",
    }),
    (req, res) => {
        console.log(req.user.token);
        req.session.token = req.user.token;
        console.log(req.user);
        req.session.user = req.user.user;
        req.session.save();
        res.redirect("http://localhost:5000");
    }
);
const jobsRoutes = require("./routes/jobs-REST");
const jobseekerRoutes = require("./routes/job-seeker-REST");

app.use("/jobs", jobsRoutes);
app.use("/jobseeker", jobseekerRoutes);

app.get("/test", (req, res) => {
    // req.session.test = 123
    res.send(req.session);
});
app.listen(5000, () => console.log(`Example app listening on port ${5000}!`));
