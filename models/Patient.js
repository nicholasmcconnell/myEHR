const mongoose = require("mongoose"),
 Schema = mongoose.Schema,

 PatientSchema = new Schema({
    userEmail: { 
        type: String, 
        required: true
     },
    patientData: { 
        type: Object, 
        required: false
     },
    healthData: { 
        type: Object, 
        required: false 
    },
    healthConditions: { 
        type: Array, 
        required: false 
    },
    medications: { 
        type: Array, 
        required: false 
    },
    contacts: { 
        type: Array, 
        required: false 
    },
    removable: { 
        type: Boolean, 
        default: false 
    },
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model("Patient", PatientSchema);;