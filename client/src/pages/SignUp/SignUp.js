import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from '../../components/Grid';
import { Button, Input } from '../../components/Forms';

export default function SignUp() {

    const [credentials, setCredentials] = useState({}),

    onInputChange = e => {
        const { name, value } = e.target;
        setCredentials({...credentials, [name]: value })
    },

    handleSubmit = e => {
        e.preventDefault();
        e.target.reset();
        /* More Code
            Here...    */
    }

    return (
        <Container classes={'sign'}>
            <Row>
                <Col size={'md-12'} >
                    <Row>
                        <div className={'mt-5'}>
                        <h5 style={text}>
                        <img style={logo} src={require('../../assets/img/Logo.png')} alt={'Logo'} />
                        Create your account
                        </h5> 
                        </div>
                    </Row>
                    <Row >
                    <form onSubmit={handleSubmit} className={'card-body'}>
                    <div className={'form-group usr-inpt'}>
                            <label>Email:</label>
                            <span className="fa fa-user"/>
                            <Input  onChange={onInputChange}
                            name="email" type="email" placeholder="E-mail address"/>                     
                        </div>
                        <div className={'form-group usr-inpt'}>
                            <label>Password:</label>
                            <span className="fa fa-lock"/>
                            <Input  onChange={onInputChange}
                            name="password" type="password" placeholder="Password"/>
                        </div>
                        <Button classes={'btn btn-primary btn-lg btn-block'} type="submit">Sign Up</Button>
                    </form>
                    </Row>
                    <Row classes={'justify-content-center'}>
                        <p> Already have an account? 
                        <Link to="/SignIn" > Log In.</Link>
                        </p>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
const logo = {
    width: "100px",
    height: "auto"
},

text = {
    color:"#a1deb6",
    textShadow: "1px 1px #000"
}