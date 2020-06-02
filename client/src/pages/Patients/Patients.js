import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from '../../components/Grid';
import { PatientHandler }  from '../../components/PatientHandler'; 
import Profiles from '../../components/ProfileList'; 
import API from "../../utils/API";

export default function Patients({ setContext }) {

    const [ patients, setPatients ] = useState([]),
     [confirmed, isConfirmed] = useState(false)

    useEffect(() => {
        getUser()
    }, [])

    const getUser = async () => {
        const { data } = await API.getUser(),
   
          patients = await API.fetchPatients(data.user);

        setPatients(patients.data);
    }
    return (
        <Container>
            <Row>
                <Col size={'md-8'} classes={'offset-md-2'}>
                    {
                        patients.map( patient => 
                            <Profiles 
                            patient={patient} 
                            context={setContext}  
                            id={patient._id} 
                            key={patient._id} 
                            />)
                    }
                    <PatientHandler 
                        confirmed={confirmed}
                        isConfirmed={() => {isConfirmed(!confirmed)}} 
                        />
                </Col>
           </Row>
        </Container>
    )
}
