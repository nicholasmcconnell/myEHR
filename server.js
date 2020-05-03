const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const { passport } = require('./passport');
const routes = require("./routes");
require('dotenv').config();


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
<<<<<<< HEAD
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/myEHR")
        .then(console.log("Connection to database established"));

// Routes
app.use(routes);
=======
// mongoose.connect(
//     process.env.MONGODB_URI || "mongodb://user:password1@ds235378.mlab.com:35378/heroku_qnfh7s5r", { useNewUrlParser: true }, () => {}, { useUnifiedTopology: true });

// // app.use(routes);
// const profileRoutes = require("./routes/api/profiles");
// app.use("/", profileRoutes);

// const authRoutes = require("./routes/api/authenticate");
// app.use("/", authRoutes);
>>>>>>> 1a3934089bfa054591e7b2fb025a9ff4d81a64d8

// Start server
app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});