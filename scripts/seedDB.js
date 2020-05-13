const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/myEHR"
);

const patientSeed = [{
        patientId: "dana@gmail.com",
        firstName: "John",
        lastName: "Doe",
        nickname: "Me",
        addressOne: "567 Placeholder Rd",
        addressTwo: "",
        city: "Boston",
        state: "MA",
        zip: "46532",
        country: "USA",
        phone: "456-153-6583",
        email: "dana@gmail.com",
        dob: "01/14/1983",
        bloodType: "B-Positive",
        insurance: "Aetna",
        insNumber: "KXY234513",
        rxBin: "657375",
        rxPcn: "879646",
        allergies: "",
        immunizations: "",
        notes: "",
        conditions: ["High blood pressure", "High cholesterol", "GERD"],
        medications: [{
                name: "Rosuvastatin Calcium",
                dose: "5 mg",
            },
            {
                name: "Hydrochlorothiazide",
                dose: "25 mg",
            },
            {
                name: "Pantoprazole",
                dose: "40 mg",
            }
        ]
    },
    {
        patientId: "dana@gmail.com",
        firstName: "Jose",
        lastName: "Martinez",
        nickname: "Uncle",
        addressOne: "346 Placeholder St",
        addressTwo: "APT 304",
        city: "Boston",
        state: "MA",
        zip: "46532",
        country: "USA",
        phone: "456-153-6583",
        email: "dana@gmail.com",
        dob: "09/24/1933",
        bloodType: "",
        insurance: "Medicare",
        insNumber: "2562345A",
        rxBin: "657375",
        rxPcn: "879646",
        allergies: "",
        immunizations: "",
        notes: "",
        conditions: ["Arthritis"],
        medications: [{
            name: "Ibuprofen",
            dose: "800 mg",
        }]
    },
    {
        patientId: "test@gmail.com",
        firstName: "Shirley",
        lastName: "Young",
        nickname: "Me",
        addressOne: "4 Placeholder Ave",
        addressTwo: "",
        city: "Richmond",
        state: "VA",
        zip: "67352",
        country: "USA",
        phone: "344-443-2415",
        email: "test@gmail.com",
        dob: "07/14/1994",
        bloodType: "O-Negative",
        insurance: "Keystone First",
        insNumber: "FDS2504798",
        rxBin: "874264",
        rxPcn: "23547",
        allergies: "Pollen, dust mites, cats",
        immunizations: "",
        notes: "Non-smoker",
        conditions: ["Asthma"],
        medications: [{
            name: "Albuterol",
            dose: "",
        }]
    },
    {
        patientId: "test@gmail.com",
        firstName: "Amanda",
        lastName: "Young",
        nickname: "Daughter",
        addressOne: "4 Placeholder Ave",
        addressTwo: "",
        city: "Richmond",
        state: "VA",
        zip: "67352",
        country: "USA",
        phone: "344-443-2415",
        email: "test@gmail.com",
        dob: "11/03/2018",
        bloodType: "O-Negative",
        insurance: "Keystone First",
        insNumber: "TSE6735645",
        rxBin: "844226",
        rxPcn: "24752",
        allergies: "",
        immunizations: "",
        notes: "",
        conditions: ["Eczema"],
        medications: []
    }
];

db.Patient
    .remove({})
    .then(() => db.Patient.collection.insertMany(patientSeed))
    .then(data => {
        console.log(data.result.n + 'records inserted!');
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });