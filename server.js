const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
require('dotenv').config()
const cookieParser = require('cookie-parser');
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://user:password1@ds235378.mlab.com:35378/heroku_qnfh7s5r", { useNewUrlParser: true }, () => {}, { useUnifiedTopology: true });

// app.use(routes);
const profileRoutes = require("./routes/api/profiles");
app.use("/", profileRoutes);

const authRoutes = require("./routes/api/authenticate");
app.use("/", authRoutes);

app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});