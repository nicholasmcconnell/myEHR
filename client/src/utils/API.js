import axios from "axios";
require('dotenv').config();
const apiKey = process.env.REACT_APP_API_KEY;

export default {
    //this should list all drugs 
    getDrugs: function () {
        return axios.get("/api/drugs");
    },
    //this will be executed when the user selects "get more info" btn
    getDrugInfo: function () {
        return axios.get(`https://www.dictionaryapi.com/api/v3/references/medical/json/cetirizine?key=${apiKey}`);
    },

    getCondition: function ({ conditionSearch }) {
        return axios.get(`https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?terms=${conditionSearch}&sf=primary_name,consumer_name&df=primary_name,consumer_name,info_link_data`)
        .catch( err => console.log(err))
    },
     
    updateEHR: function (id, data) {
        
        return new Promise((resolve, reject) => {
            resolve({ status: 'success' })
        });
        //return axios.post(`/api/:${id}`, data)
    },
    fetchUser: function () {
        return {email: 'example@example.com', _id:'123456789'}
    },

    fetchAccount: function () {
        return {
            id: "67",
            firstName: "Eddie",
            lastName: "Bravo",
            birthday: "6/11/1983",
            allergies: "peanuts. horseradish, bees",
            medications: [{
                name: "tylonal",
                dosage: "the right amount",
                date: "hey I got new meds today they are groovy - Pull new date"
            }]
        }
    },

    register: function(credentials) {
        console.log("in API.register");
        console.log(credentials);
        const { email, password } = credentials
        return axios.post('/api/authenticate/register', { email, password })
    },

    login: function(credentials) {
        const { email, password } = credentials;
        return axios.post('/api/authenticate/login', { email, password })
    }
};