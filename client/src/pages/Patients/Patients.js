import React, { useState, useEffect} from 'react';
import { Container, Row, Col } from '../../components/Grid';
import { PatientList } from '../../components/PatientList'; 
import { PatientHandler }  from '../../components/PatientHandler'; 
import API from "../../utils/API";

//force the re-rendering of state.
function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => ++value); // update the state to force render
}

export default function Patients({ setContext }) {

    const [ patients, setPatients ] = useState([]),
      [removeState, setRemoveState] = useState(false),
      forceUpdate = useForceUpdate();

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
        forceUpdate()
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
