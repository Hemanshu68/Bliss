const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/user");

passport.serializeUser((user, done) => {
    done(null, user.googleId);
});

passport.deserializeUser((id, done) => {
    User.findOne({ googleId: id }, (err, user) => {
        done(err, { user, token });
    });
});

passport.use(
    new GoogleStrategy(
        {
            clientID:
                "882696197354-28eim3q1rfor53be9i6vdr49eqkr802l.apps.googleusercontent.com",
            clientSecret: "y49Vkc4dqmInSsz4oamksvfx",
            callbackURL: "http://localhost:5000/google/callback",
            passReqToCallback: true,
            prompt: "consent",
        },
        function (token, refreshToken, profile, done) {
            User.findOne({ googleId: profile.id }, (err, user) => {
                if (err) throw err;
                if (user) done(err, { user, token });
                else {
                    // console.log(profile);
                    var newUser = new User({
                        googleId: profile.id,
                        email: profile.emails[0].value,
                        name: profile.displayName,
                    });

                    newUser.save((err) => {
                        if (err) throw err;
                        else done(err, { user, token });
                    });
                }
            });
        }
    )
);
