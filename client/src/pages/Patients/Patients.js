import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from '../../components/Grid';
import Profiles from '../../components/ProfileList'; 
import API from "../../utils/API";
import Auth from '../../Auth';

export default function Patients() {


    const  [user, setUser] = useState({}),
     [patients, setPatients] = useState([]),
     [patientId, setPatientId] = useState(),

     UserContext = React.createContext(patientId);


    useEffect(() => {
        getUser()
        setPatient()
    }, [])

    useEffect(() => {
        getPatients()
       console.log(patientId);
    }, [user])

    const getUser = async () => {
        const { data } = await API.getUser();
        console.log(user)
    }

    const getPatients = async () => {
        console.log(Auth.isAuthenticated())
        const { data } = await API.fetchPatients(user.email)
        const { firstName, lastName, nickname } = data
            console.log(data)
        for (let i = 0; i < data.length; i++){
            setPatients(patients => patients.concat(data[i]))
        }

            /* code here depends on schema but something like... */
            // const clients = data.patients;
            // setPatients(clients)
    },
    setPatient = () => {
       setPatientId('5')
     }

    return (
        <UserContext.Provider value={patientId} >
        <Container>
            <Row>
                <Col size={'md-8'} classes={'offset-md-2'}>
                    {
                        patients.map(patient => <Profiles key={patient._id} name={patient.patientData.firstName} id={patient._id} />)
                    }
                </Col>
           </Row>
        
            <br/>
            <div>
            <Link  to={{
                 pathname:'/ehr',
                 state: { patientId: "" }
            }} 
            >+ patients</Link>

            </div>
        </Container>
        </UserContext.Provider>
    )
}
