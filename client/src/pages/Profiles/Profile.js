import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from '../../components/Grid';
import { Button, Input } from '../../components/Forms';
import Profiles from '../../components/ProfileList'; 
import API from "../../utils/API";

export default function Profile() {

    const getUser = () => {
       try { 
        API.fetchUser()
            .then( res =>{ 
                console.log(res.data)
                API.fetchAccount()
            })
             .then( res => {
                console.log(res.data);
             })
        }
        catch(err){ console.log(err)}
    } 


    return (
        <Container>
            <Row>
                <Col size={'md-2'}></Col>
                    <Col size={'md-8'}>
                        <Profiles name={"User's Name"} />
                        <Profiles name={"First Care Recipient"} />
                        <Profiles name={"Second Care Recipient"} />
                    </Col>
                <Col size={'md-2'}></Col>
           </Row>
        
            <br></br>
            <div>
            <button type="button" className="btn" href='../UserInfo'>+ Add Profile</button>
            </div>
        </Container>
    )
}
