const express = require("express");
const router = express.Router();
const Patient = require("../../models");

// gets all patients
router.get('/load', async(req, res) => {
    try {
        const patients = await Profile.find();
        res.json(patients);
        // console.log(userId._id);
    } catch (err) {
        res.json({ message: err });
    }
});

//create new profile
router.post("/add", async(req, res) => {
    const patient = new Patient({
        patientId: req.body.patientId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        addressOne: req.body.addressOne,
        addressTwo: req.body.addressTwo,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        country: req.body.country,
        phone: req.body.phone,
        email: req.body.email,
        dob: req.body.dob,
        bloodType: req.body.bloodType,
        insurance: req.body.insurance,
        insNumber: req.body.insNumber,
        rxBin: req.body.rxBin,
        rxPcn: req.body.rxPcn,
        allergies: req.body.allergies,
        immunizations: req.body.immunizations,
        notes: req.body.notes,
        conditions: req.body.conditions
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