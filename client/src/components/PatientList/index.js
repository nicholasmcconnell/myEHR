import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Row } from '../Grid';
import { Button } from '../Forms';


export function PatientList({ patient, context, removeState, confirmRemoval, index }) {
    if(!patient) return

    let name,
    { patientData } = patient,
       { _id } = patient;

    if (!patientData || (patientData.firstName === null && patientData.nickName === null)) {
        name = "name this patient"
    } else {
        name = patientData.nickname ? patientData.nickname : patientData.firstName;
    }
    console.log(patient)
    if (removeState) {
    return (
        <div className={'patient-remove'}>
        <Link to='/patients'
            onClick={confirmRemoval.bind(this, index)}  //set patientContext as universal variable.  
            style={{textDecoration: 'none'}}
            >
      
            <div className="card box-shadow mt-5">
                <div className="card-body text-center">
                    <Row >
                <Col size ={"md-2"}></Col>
                <Col size ={"md-8"}> 
                    <h2 className="card-title">Remove {name !== 'name this patient' ? name : 'this patient'}</h2>
                    <p className="card-text"> 
                        Remove {name !== 'name this patient' ? name : 'this patient'} from your patient list?
                    </p>
                    </Col>
                    <Col size={"md-2"}>
                    <Button className="fas fa-user-times fa-2x" style={toggleBtn} 
                        onClick={confirmRemoval.bind(this, index)} 
                    />   
                    </Col>
                    </Row>
                </div>
            </div>
        </Link>
         </div>
    )
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

const toggleBtn = {
    float: 'right',
    border: 'none',
    margin: '0',
    color: 'white',
    backgroundColor: 'white'
}