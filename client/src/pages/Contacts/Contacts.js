import React, { useState, useContext, useRef, useEffect } from 'react';
import { Container, Row, Col } from '../../components/Grid';
import { Contacts as ForwardThis } from '../../components/Contacts';
import { useForceUpdate } from '../../utils/CustomHooks';
import PatientContext from '../../utils/PatientContext';
import API from '../../utils/API';


export default function Contacts({ location }) {

     const [ contacts, setContacts ] = useState([]),
        [ newContact, setNewContact ] = useState({}),
        [ addContact, setAddContact ] = useState(false),
        [ generalInfo, setGeneralInfo ] = useState({}),
        [ healthInfo, setHealthInfo ] = useState({}),
        [ conditions, setConditions ] = useState([]),
        [ meds, setMeds ] = useState([]),

        forceUpdate = useForceUpdate(),
        isInitialMount = useRef(true);

        let { patientId, name } = useContext(PatientContext);
        patientId = patientId || location.state.patientId;


    //Use this effect to only load patient on initial mount. And update db only on subsequent mounts. 
    useEffect(() => {   
        if (isInitialMount.current) {
            isInitialMount.current = false;
            getPatient()
        } else {
            updateDB()
         }
    }, [contacts]);

    const getPatient = async() => {
        if (!patientId) return
       
        const { data } = await API.fetchPatient(patientId)
            
        setGeneralInfo(data.patientData)
        setHealthInfo(data.healthData)
        setConditions(data.healthConditions)
        setMeds(data.medications)
        setContacts(data.contacts)
    },

    updateDB = () => { 
        const data = {generalInfo, healthInfo, conditions, meds, contacts}

        API.updateEHR(patientId, data)
            .catch(err => console.log(err))         
    },

    newContactInputChange = e => {
        const { name, value } = e.target;
        setNewContact({...newContact, [name]: value})
    }, 

    onContactChange = index => e => {
        const { name, value } = e.target,
        clone = [...contacts],
        edit = clone[index];
        
        forceUpdate();

        for (let key in edit) {

            if (key === name) {
                edit[key] = value;
            } else if (!edit.hasOwnProperty(name)) {
                edit[name] = value;
            }
        }
        clone.splice(index, 1, edit)
        setContacts(clone)
    },

    toggleContactEdit = index => {

        const arr = contacts.reduce( (acc, cur, i) => {
            cur.edit = i === index ? !cur.edit : false;
            acc.push(cur);
            return acc;
        }, [])
        setContacts(arr)
    },

    addNewContact = e => {
        e.preventDefault();
        setAddContact(false)

        const list = contacts.concat(newContact);
        setContacts(list)
    },

    removeContact = index => {
        const clone = contacts;

        clone.splice(index, 1)
        setContacts([...clone])
    };

    return (
        <Container>
            <Row classes="my-5">
                <Col size={'md-8'} classes={'offset-md-2'}>
                    <ForwardThis
                    toggleNew={() => setAddContact(!addContact)}
                    toggleState={toggleContactEdit}
                    newContact={addContact}
                    data={contacts}
                    target={onContactChange}
                    remove={removeContact}
                    newTarget={newContactInputChange}
                    formSubmit={addNewContact}
                    name={name}
                    />
                </Col>
             </Row>
        </Container>
    )
}
