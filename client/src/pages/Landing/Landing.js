import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from '../../components/Grid';
import Auth from '../../Auth';

export default function Landing() {

    return (
        <div
            style={background}
        >
            <Container>
                <Row>
                    <Col size={'md-8'} classes={'offset-md-2'}>
                        <div className="jumbotron mt-5">
                                 <img
                                    style={logo}
                                    src={require("../../assets/img/Logo.png")}
                                    alt={"Logo"}
                                />
                            <h1 className="display-4"><em>My</em> EHR</h1>
                            <p className="lead">All the medical records you need in one, simple place.</p>
                            <hr className="my-4" />
                       {!Auth.isAuthenticated() ?
                            <Link to="/signup" className="btn btn-primary btn-lg">Get Started</Link> :
                            <Link to="/patients" className="btn btn-primary btn-lg">Get Started</Link> 
                       }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const background = {
    backgroundImage: `url(${require("../../assets/img/backgroundImage2.jpg")}`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'
},
logo = {
    width: "60px",
    height: "auto",
    float: 'right'
}