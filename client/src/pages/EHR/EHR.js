import React, { useEffect, useState, useRef, useContext } from 'react';
import { useForceUpdate } from '../../utils/CustomHooks';
import PatientContext from '../../utils/PatientContext';
import { Container, Row, Col } from '../../components/Grid';
import { GeneralInfo } from '../../components/GeneralInfo';
import { HealthCard } from '../../components/HealthCard';
import { Conditions } from '../../components/Conditions';
import { Medications } from '../../components/Medications';
import { Contacts } from '../../components/Contacts';
import API from '../../utils/API';

export default function EHR({ location, setContext }) {

/*
    Globals
*/ 
    let { patientId, name } = useContext(PatientContext);
        patientId = patientId ? patientId : location.state.patientId;
  
    const [ patient, setPatient ] = useState(patientId),
        [generalInfo, setGeneralInfo] = useState({}),
        [ healthInfo, setHealthInfo ] = useState({}),
        [ conditions, setConditions ] = useState([]),
        [ meds, setMeds ] = useState([]),
        [ contacts, setContacts ] = useState([]),
        [ medInput, setMedInput ] = useState(''),
        [ newContact, setNewContact ] = useState({}),
        [ addContact, setAddContact ] = useState(false),
        [ editGenState, setGenState ] = useState(false),
        [ editHealthState, setHealthState ] = useState(false),
        [ editConditState, setConditState ] = useState(false),
        [ editMedsState, setMedsState ] = useState(false),
        [ conditSuggestions, setConditSuggestions ] = useState([]),
        [ medSuggestions, setMedSuggestions ] = useState([]),
        [ doses, setDoses ] = useState(''),
        [ query, setQuery ] = useState(''),

        forceUpdate = useForceUpdate(), 
        hasConditions = useRef(), 
        hasMeds = useRef(), 
        hasContacts = useRef(), 
        isInitialMount = useRef(true);

/*
    EHR Setup and Initialization
*/ 
    //Use this effect to only load patient on initial mount. And update db only on subsequent mounts. 
    useEffect(() => {  
        if (isInitialMount.current) {
            isInitialMount.current = false;
            getPatient()
        } else {
            updateDB()
         }
    }, [generalInfo, healthInfo, conditions, meds, contacts]);

    const getPatient = async() => {
        if (location.state.patientId === "") {
            newPatient()
        } else {
        const { data } = await API.fetchPatient(patient)
            setGeneralInfo(data.patientData)
            setHealthInfo(data.healthData)
            setConditions(data.healthConditions)
            setMeds(data.medications)
            setContacts(data.contacts)
            setParity(data)
        } 
    },

     //if no patient is passed in, create a new one on the server.
    newPatient = async() => {
        const user  = await API.getUser(),
            email = user.data.user.email;
   
        const newPatient = {email, generalInfo, healthInfo, conditions, meds, contacts},
         { data } = await API.addPatient(newPatient);

        setPatient(data._id);
        setGenState(true)
        setHealthState(true)
        setParity()
    },

/*
    State and database management
*/ 
    updateDB = e => {
        if(e) {
            e.preventDefault()
            setGenState(false)
            setHealthState(false)
        }
        if(parity()) {
        const data = {generalInfo, healthInfo, conditions, meds, contacts}
        
        API.updateEHR(patient, data)
            .catch(err => console.log(err))        
        }     
    }, 

    setParity = (data) => {
        hasConditions.current = (data && data.healthConditions.length > 0) ? true : false;     
        hasMeds.current = (data && data.medications.length > 0) ? true : false;     
        hasContacts.current = (data && data.contacts.length > 0) ? true : false;     
    },

    parity = () => {
        if(hasConditions.current && conditions.length === 0) {
            return false;
        }
        if(hasMeds.current && meds.length === 0) {
            return false;
        }
        if(hasContacts.current && contacts.length === 0) {
            return false;
        }
        return true;
    }

    useEffect(() => {
        setNameInNavbar()
    }, [generalInfo])

    const setNameInNavbar = () => {
        let { firstName, nickname } = generalInfo,
        name = nickname ? nickname : firstName;

        setContext({ patientId: patient, name })
    },

    onGenInfoInputChange = e => {
        const { name, value } = e.target;
        setGeneralInfo({ ...generalInfo, [name]: value })
    }, 

    onHealthInfoInputChange = e => {
        const { name, value } = e.target;
        setHealthInfo({ ...healthInfo, [name]: value })
    },

    newContactInputChange = e => {
        const { name, value } = e.target;
        setNewContact({...newContact, [name]: value})
    }, 
    
    onConditInputChange = async e => {
      const { value } = e.target,
       items = await getConditionNames(value);

      let suggestions = [];
       
      if (value.length > 0) {
          const regex = new RegExp(`^${value}`, 'i');
          suggestions = items.sort().filter( x => regex.test(x));
        } 
        setConditSuggestions({ suggestions, text: value })
     }

     //I'm using this effect, along with the query state to create a 1/2 second delay after typing finishes before API and other code is executed to resolve performance issues.  
     useEffect(() => {
        const timeOutId = setTimeout(() => setMedInput(query), 500);
        return () => clearTimeout(timeOutId);
      }, [query]);
    
    const onMedInputChange = async e => {
            const { name, value } = e.target; 
            setQuery({ ...query, [name]: value })
            
        //only run this code when medication changes. ignore dosage.
        if (name === 'medication') {
        try {           
        const items = await getMedNames(value)
        let suggestions = [];

        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = items.sort().filter( x => regex.test(x)).slice(0, 8)
            } 
            setMedSuggestions({ suggestions, text: value })
        } catch (err) {return}
        } 
    },

    onContactChange = index => e => {
        const { name, value } = e.target,
        clone = contacts,
        edit = contacts[index];
        
        forceUpdate();
        
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
     
     onConditDescChange = index => e => {
        const { value } = e.target,
          clone = conditions;

        forceUpdate();

         const newDescription = {
            name: conditions[index].name,
            edit: conditions[index].edit,
            description: value
        }
        clone.splice(index, 1, newDescription)
        setConditions(clone)
    }, 

    toggleDescriptionEdit = index => {
        const arr = [];

        conditions.forEach( (item, i) => {
            
            item.edit = i === index ? !item.edit : false;
            arr.push(item)
        })
        setConditions(arr)
    },

    toggleContactEdit = index => {
        const arr = [];

        contacts.forEach( (item, i) => {
            
            item.edit = i === index ? !item.edit : false;
            arr.push(item)
        })
        setContacts(arr)
    },

    addCondition = async e => {
        e.preventDefault();
        e.target.reset();
        
        let { text } = conditSuggestions;
        setConditSuggestions([]);

        if (!text) return;
        
        const [ search ]  = text.split('-'),
            { data } = await API.fetchCondition(search),
    
        description = (data[0] && data[0].shortdef) ? data[0].shortdef.join('\n') : '',

                newCondition = { 
                    name: capitalizeWord(text), 
                    description, 
                    edit: false, 
                    createdAt: Date.now()
                }
        hasConditions.current = true;
        setConditions([...conditions, newCondition])
    },
                   


    addMeds = e => {
        e.preventDefault();
        e.target.reset();

        let { text } = medSuggestions;
        if (!text) return
        
        try {
           text = text.split(' ')

            const newMed = {
                medication: capitalizeWord(text[0]),
                dosage: medInput.dosage,
                edit : false,
                createdAt: Date.now()
            }
        hasMeds.current = true;
        setMeds([...meds, newMed])
        setDoses('')
        setQuery('')
        setMedSuggestions([])
        } catch(err) {return}
    },

    addNewContact = e => {
        e.preventDefault();
        setAddContact(false)
        
        hasContacts.current = true;
        setContacts([...contacts, newContact])
    },

    removeCondition = index => {
        const clone = conditions;

        clone.splice(index, 1)

        hasConditions.current = clone.length === 0 ? false : true
        setConditions([...clone])
    },

    removeMed = index => {
        const clone = meds;
        
        clone.splice(index, 1)

        hasMeds.current = clone.length === 0 ? false : true
        setMeds([...clone])
    },

    removeContact = index => {
        const clone = contacts;

        clone.splice(index, 1)

        hasContacts.current = clone.length === 0 ? false : true
        setContacts([...clone])
    },

/*
    Features Management
*/ 
    capitalizeWord = word => word.replace(/\b[a-z]/g, char => char.toUpperCase()),

    getConditionNames = async search => {
        const { data } = await API.getConditionNames(search);
        return  data[3].map( x => x[0]);
    },

     getMedNames = async search => {
        const { data }  = await API.getMedNames(search);
        return !data.displayTermsList ? "??" : data.displayTermsList.term;  
    },

    selectSuggestedCondit = async value => {
        setConditSuggestions({ suggestions: [], text: value })

        //auto add condition when selected autocomplete value is clicked.    
        if (!value) return;
        
        const [ search ]  = value.split('-'),
            { data } = await API.fetchCondition(search),
    
        description = (data[0] && data[0].shortdef) ? data[0].shortdef.join('\n') : '',

                newCondition = { 
                    name: capitalizeWord(value), 
                    description, 
                    edit: false, 
                    createdAt: Date.now()
                }
        setConditions([...conditions, newCondition])
        setConditSuggestions({text: ''})
    },

    renderConditSuggestions = () => {
        const { suggestions } = conditSuggestions;
        
        if (!suggestions || suggestions.length === 0) {
            return;
        }
        return (
            <ul>
                {suggestions.map( (suggestion, i) => <li onClick={() => selectSuggestedCondit(suggestion)} key={i}>{suggestion}</li>)}
            </ul>
        )
    },

    selectSuggestedMed = async value => {
        setMedSuggestions({ suggestions: [], text: value})
        
        //populate dosage choices with suggestions when autocomplete option is clicked
        if (!value) return;
        try {
            const  { data } = await API.fetchMeds(value),
              doses = data.drugGroup.conceptGroup[1].conceptProperties.map(x => x.synonym).filter(x => x !== '')
           
            setDoses(doses)
        } catch(err) {return}
    },

    renderMedSuggestions = () => {
        const { suggestions } = medSuggestions;
        
        if (!suggestions || suggestions.length === 0) {
            return;
        }
        return (
            <ul>
                {suggestions.map( (suggestion, i) => <li onClick={() => selectSuggestedMed(suggestion)} key={i}>{suggestion}</li>)}
            </ul>
        )
    },

    //populate dosage choices when finger button is clicked
    addDoses = async e => {
        e.preventDefault();

        const { text } = medSuggestions;
        
        if (!text) return;
        try {
            const  { data } = await API.fetchMeds(text),
              doses = data.drugGroup.conceptGroup[1].conceptProperties.map(x => x.synonym).filter(x => x !== '')
            
            setDoses(doses)   
        } catch(err) {return}
    }


    return (
        <Container>
            <Row classes={'my-5'}>
                <Col size={'md-8'} classes={'offset-md-2'}>
                    <GeneralInfo
                        toggleState={() => setGenState(!editGenState)}
                        editState={editGenState}
                        data={generalInfo}
                        target={onGenInfoInputChange}
                        formSubmit={updateDB}
                        name={name}
                    />
                </Col>
            </Row>
            <Row classes={'my-5'}>
                <Col size={'md-8'} classes={'offset-md-2'}>
                    <HealthCard
                        toggleState={() => setHealthState(!editHealthState)}
                        editState={editHealthState}
                        data={healthInfo}
                        target={onHealthInfoInputChange}
                        formSubmit={updateDB}
                        name={name}
                    />
                </Col>
            </Row>
            <Row classes={'my-5'}>
                <Col size={'md-8'} classes={'offset-md-2'}>
                    <Conditions
                        toggleState={() => setConditState(!editConditState)}
                        editState={editConditState} 
                        toggleDescState={toggleDescriptionEdit}
                        remove={removeCondition}
                        areaTarget={onConditDescChange}
                        data={conditions}
                        target={onConditInputChange}
                        renderSuggestions={renderConditSuggestions}
                        text={conditSuggestions.text}
                        formSubmit={addCondition}
                        name={name}
                      />
                </Col>
            </Row>
            <Row classes={'my-5'}>
                <Col size={'md-8'} classes={'offset-md-2'}>
                    <Medications
                        toggleState={() => setMedsState(!editMedsState)}
                        editState={editMedsState}
                        data={meds}
                        target={onMedInputChange}
                        renderSuggestions={renderMedSuggestions}
                        text={medSuggestions.text}
                        otherDosage={medInput.dosage}
                        remove={removeMed}
                        addDoses={addDoses}
                        doseChoices={doses}
                        formSubmit={addMeds}
                        name={name}
                      />
                </Col>
            </Row>
            <Row classes={'my-5'}>
                <Col size={'md-8'} classes={'offset-md-2'}>
                    <Contacts
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