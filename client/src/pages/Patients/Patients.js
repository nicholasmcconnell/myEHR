import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col } from '../../components/Grid';
import Profiles from '../../components/ProfileList'; 
import UserContext from '../../utils/UserContext';
import API from "../../utils/API";
import Auth from '../../Auth';

export default function Patients() {
    
    const { email } = useContext(UserContext),
     [user, setUser] = useState(email),
     [patients, setPatients] = useState([]);


    useEffect(() => {
        getUser()
    }, [])

    useEffect(() => {
        getPatients()
    }, [user])

    const getUser = async () => {
        console.log(email)
        const { data } = await API.getUser()
        console.log(data)
        setUser(user)
    }

    const getPatients = async () => {
        console.log(Auth.isAuthenticated())
        const { data } = await API.fetchPatients()
        const { firstName, lastName, nickname } = data
            console.log(firstName, lastName, nickname)
        for (let i = 0; i < data.length; i++){
  
            setPatients(patients => patients.concat(data[i]))
        }

            /* code here depends on schema but something like... */
            // const clients = data.patients;
            // setPatients(clients)
    }

    return (
        <Container>
            <Row>
                <Col size={'md-8'} classes={'offset-md-2'}>
                    {/* <Profiles props={patients} name={patients} />
                    <Profiles name={patients} />
                    <Profiles name={patients} /> */}
                    {
                        patients.map(patient => <Profiles key={patient.id} name={patient.firstName} props={patient}/>)
                    }
                </Col>
           </Row>
        
            <br/>
            <div>
            <button  type="button" class="btn" >+ patients</button>

            </div>
        </Container>
    )
}
