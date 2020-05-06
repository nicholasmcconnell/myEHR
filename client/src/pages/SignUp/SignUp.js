import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Row, Col } from '../../components/Grid';
import { LoggerBtn, Input } from '../../components/Forms';
import UserContext from '../../utils/UserContext';
import API from '../../utils/API';
import Auth from '../../Auth'

export default function SignUp() {

   
    const [user, setUser] = useState(''),
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
        }

        const handleSubmit = e => {
        e.preventDefault();
        e.target.reset();

        API.register(credentials)
        .then(({ data }) => { 
    
            if(data) {
                console.log(data.email)
            setUser({  email: data }); 
            authorize()

            } else {
            console.log('response'+ data)
            }
        }).catch((err) => err)
        }

    return (
        <UserContext.Provider value={user} >
        <Container classes={'box-shadow sign'}>
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
                    
                            <LoggerBtn btnType={'Sign Up'} />

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
        </UserContext.Provider>
    )
}
const logo = {
    width: "75px",
    height: "auto"
},

    text = {
        color: "#a1deb6",
        textShadow: "1px 1px #000"
    }