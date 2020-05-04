const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/myEHR"
);

const passportSeed = [
    {
        username: "john doe",
        password: "kgvhjsbfdlnz",
        role: "admin"
    },
    {
        username: "dana chahn",
        password: "sdfafgshg",
        role: "admin"
    },
    {
        username: "nick Jude",
        password: "678f",
        role: "admin"
    }
]

// const userSeed = [{
//         id: "0",
//         firstName: "John",
//         lastName: "Doe",
//         birthday: "01/01/1990",
//         allergies: "",
//         medications: [{
//                 name: "Rosuvastatin Calcium",
//                 dosage: "5 mg",
//                 date: new Date(Date.now())
//             },
//             {
//                 name: "Hydrochlorothiazide",
//                 dosage: "25 mg",
//                 date: new Date(Date.now())
//             },
//             {
//                 name: "Pantoprazole",
//                 dosage: "40 mg",
//                 date: new Date(Date.now())
//             }
//         ]
//     },
//     {
//         id: "1",
//         firstName: "Jane",
//         lastName: "Doe",
//         birthday: "10/10/1990",
//         allergies: "",
//         medications: [{
//                 name: "Esomeprazole",
//                 dosage: "40 mg",
//                 date: new Date(Date.now())
//             },
//             {
//                 name: "Cetirizine",
//                 dosage: "5 mg",
//                 date: new Date(Date.now())
//             },
//             {
//                 name: "Ibuprofen",
//                 dosage: "400 mg",
//                 date: new Date(Date.now())
//             }
//         ]
//     }
// ];

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(passportSeed))
    .then(data => {
        console.log(data.result.n + 'records inserted!');
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });