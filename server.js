const express = require("express"),
 session = require("express-session"),
 mongoose = require("mongoose"),
 cookieParser = require('cookie-parser'),
 routes = require("./routes"),
 { passport } = require('./passport'),

 PORT = process.env.PORT || 3001,
 app = express();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Passport & Session
app.use(session({ secret: "Nincompoop", resave: true, saveUninitialized: true }));
app.use(passport.initialize())
app.use(passport.session())

// Serve static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/myEHR")
    .then(console.log("Connection to database established"));

// Routes
app.use(routes);

// Start server
app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});