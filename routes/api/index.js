const router = require("express").Router();
const medicationRoutes = require("./medications");

router.use("/medications", medicationRoutes);

router.use((req, res) => {
    console.log("route hit: root in routes/api/index")
    res.send("hello root route in routes/api/index")
})

module.exports = router;