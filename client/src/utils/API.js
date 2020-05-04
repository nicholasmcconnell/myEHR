import axios from "axios";
require('dotenv').config();
const apiKey = process.env.REACT_APP_API_KEY;
// webstersKey = '6bbfacfd-a9a0-44da-a339-83be451e5de0'

export default {
    getDrugs: function () {
        return axios.get("/api/drugs");
    },
    //this will be executed when the user selects "get more info" btn
    getDrugInfo: function () {
        return axios.get(`https://www.dictionaryapi.com/api/v3/references/medical/json/cetirizine?key=${apiKey}`);
    },

    getConditionNames: function(search) {
        return axios.get(`https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?terms=${search}&sf=primary_name,consumer_name&df=primary_name,consumer_name,info_link_data`)
            .catch(err => console.log(err))
    },

    fetchCondition: function(search) {
        return axios.get(`https://www.dictionaryapi.com/api/v3/references/medical/json/${search}?key=${apiKey}`)
            .catch(err => console.log(err))
    },

    fetchCondition: function (search) {
        return axios.get(`https://www.dictionaryapi.com/api/v3/references/medical/json/${search}?key=${apiKey}`)
            .catch(err => console.log(err))
    },

    fetchPatients: function() {
        return axios.get("/load");
        // return {
        //     id: "67",
        //     firstName: "Eddie",
        //     lastName: "Bravo",
        //     birthday: "6/11/1983",
        //     allergies: "peanuts. horseradish, bees",
        //     medications: [{
        //         name: "tylonal",
        //         dosage: "the right amount",
        //         date: "hey I got new meds today they are groovy - Pull new date"
        //     }]
        // }
    },

    getUser: () => {
        return axios.get('/api/users').then( data => data )
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
    },

    getCookie: () => axios.get('/api/users/get-data').then( data => data ),

    deleteCookie: () => axios.delete('/api/users/clear-cookie').then( data => data),

    readCookie: () => axios.get('/api/users/read-cookie').then( data => data),

    authenticate:  ({ username, password }) =>  axios.post('/api/users/authenticate', { auth: { username, password } }),

    logout: () => axios.post('/api/users/logout').then( data => data ),

}
