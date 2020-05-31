import { createContext } from 'react';

const patient = {
    patientId: '',
    name: ''
}
const PatientContext = createContext(patient);

export default PatientContext;
