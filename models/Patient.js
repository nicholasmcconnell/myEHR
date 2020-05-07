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
    contacts: { 
<<<<<<< HEAD
        type: Object, 
=======
        type: Array, 
>>>>>>> 5ae1e66f46a8cbe682148888b815903e4fa940ef
        default: false 
    },
    
})

const Patient = mongoose.model("Patient", PatientSchema);

module.exports = Patient;