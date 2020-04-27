const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userInfoSchema = new Schema({
    id: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    birthday: { type: String, required: true },
    allergies: { type: String, required: true },
    medications: [{
        name: { type: String, required: true },
        dosage: { type: String, required: true },
        date: { type: Date, default: Date.now }
    }]
});

const UserInfo = mongoose.model("User", userInfoSchema);

module.exports = UserInfo;