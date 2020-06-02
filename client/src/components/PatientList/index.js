import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Row } from '../Grid';


export function PatientList({ patient, context, removeState, confirmRemoval, remove, index }) {

    const { patientData } = patient,
          { healthData } = patient,
             { _id } = patient;
        
    let name;
    // if (!patientData || !healthData) return


    if (!patientData || (patientData.firstName === null && patientData.nickName === null)) {
        name = "name this patient"
    } else {
        name = patientData.nickname ? patientData.nickname : patientData.firstName;
    }

    if (removeState) {
        if(patient.removable) {
    return (
        <div className={'patient-remove'}>
        <Link to='/patients'
            onClick={remove.bind(this, _id)}  
            style={{textDecoration: 'none'}}
            >
            <div className="card box-shadow mt-5">
                <div className="card-body text-center btn btn-outline-danger">
                <Row >
                <Col size={"md-4"}>
                        <i className="fas fa-user-times fa-4x rm-lg-user" />   
                    </Col>
                    <Col size ={"md-8"}> 
                        <h2 className="card-title">Please Confirm</h2>
                        <p className="card-text"> 
                            This will remove {name !== 'name this patient' ? name : 'this patient'} from your list.
                        </p>
                    </Col>
                </Row>
                </div>
            </div>
        </Link>
         </div>
    )}
        else {
    return (
        <div className={'patient-remove'}>
        <Link to='/patients'
            onClick={confirmRemoval.bind(this, index)}  
            style={{textDecoration: 'none'}}
            >
            <div className="card box-shadow mt-5">
                <div className="card-body text-center">
                <Row >
                    <Col size ={"md-2"}></Col>
                    <Col size ={"md-8"}> 
                        <h2 className="card-title">Remove {name !== 'name this patient' ? name : 'this patient'}</h2>
                        <p className="card-text"> 
                            Delete {name !== 'name this patient' ? name : 'this patient'} from your patient list?
                        </p>
                    </Col>
                    <Col size={"md-2"}>
                        <i className="fas fa-user-times fa-2x rm-sm-user" style={toggleBtn} 
                        />   
                    </Col>
                </Row>
                </div>
            </div>
        </Link>
         </div>
    )}
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
                        Access {name !== 'name this patient' ? name : 'this patient'}'s information here.
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