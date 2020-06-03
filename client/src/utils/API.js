import axios from "axios";
const apiKey = process.env.REACT_APP_API_KEY;

export default {
    fetchPatient: id => axios.get(`/api/patients/${id}`),

    fetchPatients: email => axios.get("/api/patients/load", email),

    addPatient: data => axios.post("/api/patients/add", data),

    removePatient: id => axios.delete(`/api/patients/${id}`),

    updateEHR: (id, data) => axios.patch(`/api/patients/${id}`, data),

    getUser: () => axios.get('/api/users').then(data => data),

    register: credentials => axios.post('api/users/register', credentials),

    login: credentials => axios.post('/api/users/login', credentials),

/*
    External APIs
*/ 
    getConditionNames: search => axios.get(`https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?terms=${search}&sf=primary_name,consumer_name&df=primary_name,consumer_name,info_link_data`),
    
    fetchCondition: search => axios.get(`https://www.dictionaryapi.com/api/v3/references/medical/json/${search}?key=${apiKey}`),

    getMedNames: () => axios.get('https://rxnav.nlm.nih.gov/REST/displaynames'),

    fetchMeds: search => axios.get(`https://rxnav.nlm.nih.gov/REST/drugs.json?name=${search}`)
}