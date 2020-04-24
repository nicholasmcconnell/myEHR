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
    getUsers: function () {
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
    }
};