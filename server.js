const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
require('dotenv').config()
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
);

app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});