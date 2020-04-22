import axios from "axios";
require('dotenv').config()
const apiKey = process.env.apiKey;

export default {
    getDrugs: function() {
        // return axios.get(`https://api.fda.gov/drug/event.json?search=patient.drug.openfda.brand_name:'${drugName}'&limit=2`);
        return axios.get(`https://www.dictionaryapi.com/api/v3/references/medical/json/cetirizine?key=` + apiKey);
    }
};