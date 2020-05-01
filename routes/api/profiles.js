const express = require("express");
const router = express.Router();
const Profile = require("../../models/Profile");
const userId = require("./authenticate");

// gets all the profiles
router.get('/load', async(req, res) => {
    try {
        const profiles = await Profile.find();
        res.json(profiles);
        // console.log(userId._id);
    } catch (err) {
        res.json({ message: err });
    }
});

//create new profile
router.post("/add", async(req, res) => {
    const profile = new Profile({
        profileId: req.body.profileId,
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
        const savedProfile = await profile.save();
        res.json(savedProfile);
    } catch (err) {
        res.json({ message: err });
    }
});

//get by id
router.get("/:profileId", async(req, res) => {
    try {
        const profile = await Profile.findById(req.params.profileId);
        res.json(profile);
    } catch (err) {
        res.json({ message: err });
    }
});

//delete
router.delete("/:profileId", async(req, res) => {
    try {
        const removedProfile = await Profile.remove({
            _id: req.params.profileId
        });
        res.json(removedProfile);
    } catch (err) {
        res.json({ message: err });
    }
});

//update 
router.patch("/:profileId", async(req, res) => {
    try {
        const updatedProfile = await Profile.updateOne({
            _id: req.params.profileId
        }, {
            $set: { birthday: req.body.birthday }
        });
        res.json(updatedProfile);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;