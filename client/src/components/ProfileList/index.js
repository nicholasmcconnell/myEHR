import React from 'react'
import { Link } from 'react-router-dom';


export default function Profiles({ patient, context, id }) {
    let name;

  if (typeof patient == 'undefined' || typeof patient.patientData == 'undefined'|| typeof patient.patientData.firstName == 'undefined') {
      name = "Nameless Patient"
} else {
    name = patient.patientData.firstName;
    }
    
    return (
        <Link to={{
            pathname:'/ehr',
            state: { patientId: id }
        }}
            onClick={context(id)}  //set patientContext as universal variable.  
            style={{textDecoration: 'none'}}
            >
            <div className="card box-shadow mt-5">
            <div className="card-body text-center">
                <h2 className="card-title">{name}</h2>
                <p className="card-text"> Access {name}'s information here</p>
            </div>
            </div>
        </Link>
    )
}
