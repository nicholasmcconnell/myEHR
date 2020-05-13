const router = require("express").Router();
const userRoutes = require('./users')
const patientRoutes = require("./patients");

router.use("/users", userRoutes);
router.use("/patients", patientRoutes);

module.exports = router;