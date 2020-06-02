import React, { useState, useEffect} from 'react';
import { Container, Row, Col } from '../../components/Grid';
import { PatientList } from '../../components/PatientList'; 
import { PatientHandler }  from '../../components/PatientHandler'; 
import API from "../../utils/API";

export default function Patients({ setContext }) {

    const [ patients, setPatients ] = useState([]),
      [removeState, setRemoveState] = useState(false)

    useEffect(() => {
        getUser()
    }, [])

    const getUser = async () => {
        const { data } = await API.getUser(),
   
          patients = await API.fetchPatients(data.user);

        setPatients(patients.data);
    },

    togglePatientAsRemovable = index => {
        const clone = patients;
        
        clone[index].removable = !clone[index].removable
        
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
                            key={patient._id} 
                            />)
                    }
                    <PatientHandler 
                        confirmed={removeState}
                        isConfirmed={() => {setRemoveState(!removeState)}} 
                        />
                </Col>
           </Row>
        </Container>
    )
}
