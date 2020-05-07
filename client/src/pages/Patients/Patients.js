import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from '../../components/Grid';
import Profiles from '../../components/ProfileList'; 
import API from "../../utils/API";

export default function Patients() {

    const [patients, setPatients] = useState([])

    useEffect(() => {
        getUser()
    }, [])

    const getUser = async () => {
        const { data }= await API.getUser();
        console.log("getUser -> data", data)
   
         let patients  = await API.fetchPatients(data.user)
        patients = patients.data
        setPatients(patients)
        console.log("getUser -> patients", patients)
    }

    return (
        <Container>
            <Row>
                <Col size={'md-8'} classes={'offset-md-2'}>
                    {
                        patients.map(patient => <Profiles key={patient._id} patient={patient} id={patient._id} />)
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
