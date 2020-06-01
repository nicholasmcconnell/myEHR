import React, { useState, useContext, useRef, useEffect } from 'react';
import { Container, Row, Col } from '../../components/Grid';
import { Contacts as ForwardThis } from '../../components/Contacts';
import PatientContext from '../../utils/PatientContext';
import API from '../../utils/API';

export default function Contacts({ location }) {

    let { patientId, name } = useContext(PatientContext);
      patientId = patientId ? patientId : location.state.patientId;
      console.log("Contacts -> patientId", patientId)

    const [ otherData, setOtherData ] = useState(),
      [ contacts, setContacts ] = useState([
        //   {  contact: 'Primary Care',
        //     office: 'Medical Center',
        //     name: 'Dr. Evil',
        //     addressOne: '1234 Candy Ln',
        //     city: 'Sky High',
        //     state: 'NV',
        //     zip: '50025',
        //     country: 'beckybeckystanstan',
        //     primaryPhone: '(212)555-1234',
        //     primaryExt: '6628',
        //     fax: '(212)555-9876',
        //     email: 'drevilguy@gmail.com',
        //     website: 'getyourevil-medicine.com',
        //     edit: false}
        ]),
        [ newContact, setNewContact ] = useState({}),
        [ addContact, setAddContact ] = useState(false),
        [generalInfo, setGeneralInfo] = useState({}),
        [ healthInfo, setHealthInfo ] = useState({}),
        [ conditions, setConditions ] = useState([]),
        [ meds, setMeds ] = useState([]),

        
    //Use this effect to only load patient on initial mount. And update db only on subsequent mounts. 
    isInitialMount = useRef(true);
    console.log(otherData)
    useEffect(() => {   
        if (isInitialMount.current) {
            isInitialMount.current = false;
            getPatient()
        } else {
            updateDB()
         }
    }, [contacts]);

    const getPatient = async() => {

        if (!patientId) {
            return
        } else {
        const { data } = await API.fetchPatient(patientId)
            
        setGeneralInfo(data.patientData)
        setHealthInfo(data.healthData)
        setConditions(data.healthConditions)
        setMeds(data.medications)
        setContacts(data.contacts)
        } 
    },

    updateDB = e => {
        if(e) {
        e.preventDefault()
        }
        const data = {generalInfo, healthInfo, conditions, meds, contacts}

        API.updateEHR(patientId, data)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        console.log(data.healthData)             
    },

    newContactInputChange = e => {
        const { name, value } = e.target;
        setNewContact({...newContact, [name]: value})
    }, 

    onContactChange = index => e => {
        const { name, value } = e.target,
        clone = contacts,
        edit = contacts[index];
        
        this.forceUpdate() //force the re-rendering of state.
        
        for (let key of Object.keys(edit)) {

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
        const arr = [];

        contacts.forEach( (item, i) => {
            
            item.edit = i === index ? !item.edit : false;
            arr.push(item)
        })
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
                    />
                </Col>
             </Row>
        </Container>
    )
}
