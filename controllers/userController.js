const db = require("../models");

/*
            Under Construction...
*/

module.exports = {
    create: (req, res) => {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch( err => res.status(422).json(err));
    }
}