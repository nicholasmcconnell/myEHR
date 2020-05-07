import axios from "axios";
require('dotenv').config();
const apiKey = process.env.REACT_APP_API_KEY;

export default {
    fetchPatient: function(id) {
        return axios.get(`/api/patients/${id}`);
    },

    getDrugInfo: function() {
        return axios.get(`https://www.dictionaryapi.com/api/v3/references/medical/json/cetirizine?key=${apiKey}`);
    },

    getConditionNames: function(search) {
        return axios.get(`https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?terms=${search}&sf=primary_name,consumer_name&df=primary_name,consumer_name,info_link_data`)
            .catch(err => console.log(err))
    },

    fetchMeds: function(search) {
        return axios.get(`https://rxnav.nlm.nih.gov/REST/drugs.json?name=${search}`)
            .catch(err => console.log(err))
    },

    getMedNames: function() {
        return axios.get('https://rxnav.nlm.nih.gov/REST/displaynames')
            .catch(err => console.log(err))
    },

    fetchCondition: function(search) {
        return axios.get(`https://www.dictionaryapi.com/api/v3/references/medical/json/${search}?key=${apiKey}`)
            .catch(err => console.log(err))
    },

    fetchPatients: function(email) {
        return axios.get("/api/patients/load", email);
    },

    addPatient: function(data) {
        return axios.post("/api/patients/add", data);
    },

    removeEHR: function(data) {
        return axios.delete("/api/patients", data);
    },

    updateEHR: function(id, data) {
        return axios.patch(`/api/patients/${id}`, data);
    },

    getUser: function() {
        return axios.get('/api/users').then(data => data)
    },

    register: function(credentials) {
        // console.log("in API.register");
        // console.log(credentials);
        const { email, password } = credentials
        return axios.post('api/users/register', { email, password })
    },

    login: function(credentials) {
        const { email, password } = credentials;
        return axios.post('/api/users/login', { email, password })
    }

}