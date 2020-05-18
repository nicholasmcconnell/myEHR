const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
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
        type: Object, 
        required: false 
    },
    
})

const Patient = mongoose.model("Patient", PatientSchema);

module.exports = Patient;