import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from '../../components/Grid';
import Profiles from '../../components/ProfileList'; 
import API from "../../utils/API";
import Auth from '../../Auth'

export default function Patients(props) {
    
    let history = useHistory();
    const [user, setUser] = useState();
    const [patients, setPatients] = useState([]);


    useEffect(() => {
        getUser()
    }, [])

    useEffect(() => {
        getPatients()
    }, [user])

    const getUser = async () => {
        const { user } = await API.getUser()
        setUser(user)
    }

    const getPatients = async () => {
        console.log(Auth.isAuthenticated())
        const { data } = await API.fetchPatients()
        // const { firstName, lastName, email } = data;

        for (let i = 0; i < data.length; i++){
  //if statement to compare the login email and the email used for that patient?? 
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
