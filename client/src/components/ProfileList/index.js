import React from 'react'
import { Link } from 'react-router-dom';


export function Profiles({ patient, context }) {

    console.log("Profiles -> patient", patient)
    if(!patient) return
    
    let name,
    { patientData } = patient,
       { _id } = patient;

  if (!patientData || (patientData.firstName === null && patientData.nickName === null)) {
      name = "name this patient"
  } else {
    name = patientData.nickname ? patientData.nickname : patientData.firstName;
    }
    
    return (
        <Link to={{
            pathname:'/ehr',
            state: { patientId: _id, name }
        }}
            onClick={()=>{context({ patientId: _id, name })}}  //set patientContext as universal variable.  
            style={{textDecoration: 'none'}}
            >
            <div className="card box-shadow mt-5">
                <div className="card-body text-center">
                    <h2 className="card-title">{name}</h2>
                    <p className="card-text"> 
                        Access {name !== 'name this patient' ? name : 'this patient'}'s information here
                    </p>
                </div>
            </div>
        </Link>
    )
}
