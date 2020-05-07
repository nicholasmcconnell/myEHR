const express = require("express");
const router = express.Router();
const { Patient } = require("../../models");

// gets all patients
router.get('/load', async(req, res) => {
    try {
        const email = req.user.email;
        const patients = await Patient.find({ "email": email });
        res.json(patients);
    } catch (err) {
        res.json({ message: err });
    }
});

//create new profile
router.post('/add', async({ body }, res) => {
    const patient = new Patient({
        patientData: body.generalInfo,
        healthData: body.healthInfo,
        healthConditions: body.conditions,
        medications: body.meds,
        contacts: body.contacts,
    });

    //promise
    try {
        const savedPatient = await patient.save();
        res.json(savedPatient);
    } catch (err) {
        res.json({ message: err });
    }
});

//get by id
router.get("/:patientId", async(req, res) => {
    try {
        const patient = await Patient.findById(req.params.patientId);
        res.json(patient);
    } catch (err) {
        res.json({ message: err });
    }
});

//delete
router.delete("/:patientId", async(req, res) => {
    try {
        const removedPatient = await Patient.remove({
            _id: req.params.patientId
        });
        res.json(removedPatient);
    } catch (err) {
        res.json({ message: err });
    }
});

//update 
router.patch("/:patientId", async(req, res) => {
    try {
        const updatedPatient = await Patient.updateOne({
            _id: req.params.patientId
        }, {
            $set: { birthday: req.body.birthday }
        });
        res.json(updatedPatient);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;