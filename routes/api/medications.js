const router = require("express").Router();

// app.get("/api/drugs", (req, res) => {
//     axios.get(`https://www.dictionaryapi.com/api/v3/references/medical/json/cetirizine?key=f57f85fe-8b49-4bf7-a104-d906698dec04`)
// }).then(data => {
//     console.log(data);
//     res.json(data);
// });

router.route("/medications")
    .get((req, res) => {
        console.log("routehit: rout in routes/api/medications")
        res.send("hello root route in routes/api/medications")
    })

router.use((req, res) => {
    console.log("Route hit: catch-all in routes/api/medications");
    res.send("hello catch-all route in routes/api/medications")
})


module.exports = router;