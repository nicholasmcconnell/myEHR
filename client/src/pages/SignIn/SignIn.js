import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Row, Col } from '../../components/Grid';
import { LoggerBtn, Input } from '../../components/Forms';

import API from '../../utils/API';
import Auth from '../../Auth'

export default function SignIn() {

    const [user, setUser] = useState({  email: '' }),
    [credentials, setCredentials] = useState({});

     let history = useHistory();
     
    const onInputChange = e => {

        const { name, value } = e.target;
        setCredentials({...credentials, [name]: value })
    },

     authorize = () => {
        Auth.login(() => {
          history.push("/profiles")
        })
      },
       
     handleSubmit = e => {
        e.preventDefault();
        e.target.reset();
        
        API.login(credentials)
            .then(({ data }) => { 
              if(data.status === 'success') {

                setUser({  user: data.email });
                authorize()
                console.log(data)
              } else {
                console.log('Login failed.  Please try again.')
                }
          }).catch( err => err)
    }
    
    return (

        <Container classes={'box-shadow sign'}>
            <Row>
                <Col size={'md-12'} >
                    <Row>
                        <div className={'mt-5'}>
                            <h5 style={text}>
                                <img style={logo} src={require('../../assets/img/Logo.png')} alt={'Logo'} />
                                Log-in to your account
                            </h5>
                        </div>
                    </Row>
                    <Row >
                        <form onSubmit={handleSubmit} className={'card-body'}>
                            <div className={'form-group usr-inpt'}>
                                <label>Email:</label>
                                <span className="fa fa-user" />
                                <Input onChange={onInputChange}
                                    name="email" type="email" placeholder="E-mail address" />
                            </div>
                            <div className={'form-group usr-inpt'}>
                                <label>Password:</label>
                                <span className="fa fa-lock" />
                                <Input onChange={onInputChange}
                                    name="password" type="password" placeholder="Password" />
                            </div>


                            <LoggerBtn btnType={'log in'} />

                        </form>

                    </Row>
                    <Row classes={'justify-content-center'}>
                        <p> New here?
                        <Link to="/signup" > Sign up.</Link>
                        </p>
                    </Row>
                </Col>

            </Row>
        </Container>
    )
}

const logo = {
    width: "60px",
    height: "auto"
},

text = {
    color: "#0099ff",
    textShadow: "1px 1px #000"
}
