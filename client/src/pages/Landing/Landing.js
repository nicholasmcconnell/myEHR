import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from '../../components/Grid';
import { Button, Input } from '../../components/Forms';

export default function Landing() {

    return (
        <div>
            {/* <img style={backgroundImage} src={require('../../assets/img/backgroundImage2.jpg')} alt={'BackgroundImage'} /> */}
        <Container>
             <div class="jumbotron">
                <h1 class="display-4">My EHR</h1>
                <p class="lead">All your medical records in one place.</p>
                <hr class="my-4"/>
                <p></p>
                <a class="btn btn-primary btn-lg" href="../SignUp" role="button">Get Started</a>
            </div>
        </Container>
        </div>
    )
}

// const backgroundImage = {
//   backgroundPosition: "center center",
//   backgroundRepeat: "no-repeat",
//   backgroundAttachment: "fixed",
//   objectFit: "cover",
//   zIndex: 1
// }