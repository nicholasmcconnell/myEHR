// const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// router.use((req, res) => {
//     console.log("Route hit: root in routes/index");
//     res.send("non router /spi hello root route in routes/index")
// })

// If no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;