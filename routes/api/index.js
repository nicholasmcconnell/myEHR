const router = require("express").Router();
const medicationRoutes = require("./medications");
const authenticateRoutes = require('./authenticate')

console.log("in routes/index/")

router.use("/medications", medicationRoutes);
router.use("/authenticate", authenticateRoutes);

// router.use((req, res) => {
//     console.log("route hit: root in routes/api/index")
//     res.send("hello root route in routes/api/index")
// })

module.exports = router;