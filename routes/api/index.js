const router = require("express").Router();
const medicationRoutes = require("./medications");

router.use("/medications", medicationRoutes);

module.exports = router;