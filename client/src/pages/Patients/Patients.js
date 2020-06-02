import React, { useState, useEffect} from 'react';
import { Container, Row, Col } from '../../components/Grid';
import { PatientList } from '../../components/PatientList'; 
import { PatientHandler }  from '../../components/PatientHandler'; 
import API from "../../utils/API";


export default function Patients({ setContext }) {

    const [ patients, setPatients ] = useState([]),
      [removeState, setRemoveState] = useState(false),
      [confirmed, isConfirmed] = useState(false);

    useEffect(() => {
        getPatients()
    }, [])

    const getPatients = async () => {
        const { data } = await API.getUser(),
   
          patients = await API.fetchPatients(data.user);

        setPatients(patients.data);
    },

    removePatient = async _id => {
       await API.removePatient(_id)

       setRemoveState(false)
       getPatients()
    },

    togglePatientAsRemovable = index => {
        const clone = patients;
        
        clone[index].removable = !clone[index].removable
        
        isConfirmed(true)
        setPatients(clone)
    },

    cancelPatientRemoval = () => {
        const clone = patients;
        
        clone.forEach( item => {
            item.removable = false
        })
        isConfirmed(false)
        setRemoveState(false)
        setPatients(clone)
    }


    return (
        <Container>
            <Row>
                <Col size={'md-8'} classes={'offset-md-2'}>
                    {
                        patients.map( (patient, i) => 
                            <PatientList 
                            patient={patient} 
                            index={i} 
                            context={setContext}  
                            removeState={removeState}
                            confirmRemoval={togglePatientAsRemovable}
                            remove={removePatient}
                            key={patient._id} 
                            />)
                    }
                    <PatientHandler 
                        removeState={removeState}
                        confirmed={confirmed}
                        cancel={cancelPatientRemoval}
                        toggleRemoveState={() => {setRemoveState(!removeState)}} 
                        />
                </Col>
           </Row>
        </Container>
    )
}
