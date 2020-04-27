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
// app.use(routes);

// Serve up static assets (usually on heroku)

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//How to interact with front end on 3000 and 3001 on backend
//axios.get('/api/items', {port: 3001}).then(...
//proxy fill



// Send every request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//     console.log("Test Route hit: root in server");
//     // res.send("Test Route hit: root in server")
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
// })

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/myEHR", { useNewUrlParser: true }, () => {
        console.log('Sucessfully connected to Database!')

    }, { useUnifiedTopology: true });

const userRouter = require('./routes/User');
app.use('/user', userRouter)

app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});