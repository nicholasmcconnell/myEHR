import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Row, Col } from '../../components/Grid';
import { LoggerBtn, Input } from '../../components/Forms';
import API from '../../utils/API';
import Auth from '../../Auth'

export default function SignIn(props) {

    let history = useHistory();
    const [credentials, setCredentials] = useState({}),

    onInputChange = e => {
        console.log(e.target.name)
        const { name, value } = e.target;
        setCredentials({...credentials, [name]: value })
    },

    auth = async () => {
        try {
          const res = await API.authenticate(credentials)
          const {data} = await API.getUser()
          console.log("auth -> data", data)
    
          console.log(res.data.screen)
          if (res.data.screen !== undefined) {
            setScreen(res.data.screen);
          }
        } catch (e) {
          console.log(e);
        }
      };

     const { screen, setScreen } = props;

     const [data, setData] = useState()
     
     const removeCookie = async () => {
      try {
        await API.deleteCookie()
        setScreen('auth');
      } catch (e) {
        console.log(e);
      }
    }
  console.log(props)
     const getData = async () => {
      try {
        const { data } = await API.getCookie();
        console.log(data)
        setData(data);
      } catch (e) {
        console.log(e);
      }
    } 
    const authorize = () => {
        Auth.login(() => {
          history.push("/profiles")
        })
      }
       
    const handleSubmit = e => {
        e.preventDefault();
        e.target.reset();

        API.login(credentials)
            .then(({ data }) => { 
              console.log(data)
              if(data.status === 'success') {
                authorize()
              } else {
                console.log('Login failed.  Please try again.')
                }
            }
            )
            .catch((err) => err)
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

                            <LoggerBtn />
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
    width: "100px",
    height: "auto"
},

text = {
    color: "#a1deb6",
    textShadow: "1px 1px #000"
}
