const router = require("express").Router();
const authenticateRoutes = require('./authenticate')
const profileRoutes = require("./profiles");

router.use("/authenticate", authenticateRoutes);
router.use("/profiles", profileRoutes);

module.exports = router;