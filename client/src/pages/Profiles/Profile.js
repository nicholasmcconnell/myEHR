import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from '../../components/Grid';
import Profiles from '../../components/ProfileList'; 
import API from "../../utils/API";

export default function Profile() {

    const [user, setUser] = useState();
    const [patients, setPatients] = useState();

    useEffect(() => {
        getUser()
    }, [])

    useEffect(() => {
        getPatients()
    }, [user])


    const getUser = async () => {
        
        const { user } = await API.fetchUser()
        setUser(user)
    }

    const getPatients = async () => {
        
        const { data } = await API.fetchAccount()

            /* code here depends on schema but something like... */
            // const clients = data.patients;
            // setPatients(clients)
    }
            


    return (
        <Container>
            <Row>
                <Col size={'md-8'} classes={'offset-md-2'}>
                    <Profiles props={patients} name={"User's Name"} />
                    <Profiles name={"First Care Recipient"} />
                    <Profiles name={"Second Care Recipient"} />
                </Col>
           </Row>
        
            <br></br>
            <div>
            <button type="button" class="btn" href='../UserInfo'>Add Profile</button>
            </div>
        </Container>
    )
}
