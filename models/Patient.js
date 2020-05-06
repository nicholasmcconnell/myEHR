const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
    patientData: { 
        type: Object, 
        required: false
     },
    healthData: { 
        type: Object, 
        default: false 
    },
    healthConditions: { 
        type: Array, 
        default: false 
    },
    medications: { 
        type: Array, 
        default: false 
    },
    Contacts: { 
        type: Array, 
        default: false 
    },
    
})

const Patient = mongoose.model("Patient", PatientSchema);

module.exports = Patient;