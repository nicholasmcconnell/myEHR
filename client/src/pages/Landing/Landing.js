import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from '../../components/Grid';
import { Button, Input } from '../../components/Forms';

export default function Landing() {

    return (
        <Container>
                <div class="jumbotron">
                    <h1 class="display-4">My EHR</h1>
                    <p class="lead">All your medical records in one place.</p>
                    <hr class="my-4"/>
                    <p></p>
                    <a class="btn btn-primary btn-lg" href="../SignUp" role="button">Get Started</a>
                </div>
            
        </Container>
    )
}

