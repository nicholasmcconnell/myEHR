const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const { passport } = require('./passport');
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

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
mongoose.connect(
        process.env.MONGODB_URI || "mongodb://localhost/myEHR")
    .then(console.log("Connection to database established"));

// Routes
app.use(routes);

// const patientRoutes = require("./routes/api/patients");
// app.use('/', patientRoutes);

// Start server
app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});