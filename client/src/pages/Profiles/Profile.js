import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from '../../components/Grid';
import Profiles from '../../components/ProfileList'; 
import API from "../../utils/API";
import Auth from '../../Auth'

export default function Profile(props) {
    
    let history = useHistory();

    const [user, setUser] = useState();
    const [patients, setPatients] = useState();


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
        
        const { data } = await API.fetchPatients()

            /* code here depends on schema but something like... */
            // const clients = data.patients;
            // setPatients(clients)
    }
    
    const deAuthorize = () => {
        Auth.logout(() => {
          history.push("/")
        })
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
        
            <br/>
            <div>
            <button onClick={() => deAuthorize()}
            type="button" class="btn" >+ patients</button>

            </div>
        </Container>
    )
}
