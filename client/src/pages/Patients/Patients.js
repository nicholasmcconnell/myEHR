import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from '../../components/Grid';
import Profiles from '../../components/ProfileList'; 
import API from "../../utils/API";

export default function Patients({ setContext }) {

    const [patients, setPatients] = useState([])

    useEffect(() => {
        getUser()
    }, [])

    const getUser = async () => {
        const { data }= await API.getUser(),
   
          patients  = await API.fetchPatients(data.user);

        setPatients(patients.data);
        console.log('hello', patients)
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
                </Col>
           </Row>
            <br/>
            <div>
            <Link  to={{
                 pathname:'/ehr',
                 state: { patientId: "" }
            }} 
            >+ patients</Link>

            </div>
        </Container>
    )
}
