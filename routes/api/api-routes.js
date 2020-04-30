const router = require("express").Router(),
    userController = require("../../controllers/userController");


router.route("/api/signup")
    .get(userController.create);

router.route("/").get((req, res) => {

    console.log("routehit: rout in routes/api/medications")
    res.send("hello root route in routes/api/medications")
})
   

// router.use((req, res) => {
//     console.log("Route hit: catch-all in routes/api/medications");
//     res.send("hello catch-all route in routes/api/medications")
// })


module.exports = router;