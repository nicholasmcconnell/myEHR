import React, { useEffect, useState, useContext } from 'react';
import value  from '../Patients';
import { Container, Row, Col } from '../../components/Grid';
import { ContactCard } from '../../components/ContactCard';
import { HealthCard } from '../../components/HealthCard';
import { Conditions } from '../../components/Conditions';
import { Medications } from '../../components/Medications';
import Contacts from '../../components/Contacts';
import API from '../../utils/API';

export default function EHR({ location }) {

    
    const [generalInfo, setGeneralInfo] = useState({}),
        [ healthInfo, setHealthInfo ] = useState({}),
        [ contactInfo, setContactInfo ] = useState([]),
        [ patient, setPatient ] = useState(),
        [ conditions, setConditions ] = useState([]),
        [ meds, setMeds ] = useState([]),
        [ medInput, setMedInput ] = useState(''),
        [ editGenState, setGenState ]= useState(false),
        [ editHealthState, setHealthState ]= useState(false),
        [ editConditState, setConditState ]= useState(false),
        [ editContState, setContState ]= useState(false),
        [ editMedsState, setMedsState ]= useState(false),
        [ conditionText, setConditText ]= useState(''),
        [ medText, setMedText ]= useState(''),
        [ descEditState, setDescEditState ]= useState(false),
        [ medEditState, setMedEditState ]= useState(false),
        [ conditSuggestions, setConditSuggestions ]= useState([]),
        [ medSuggestions, setMedSuggestions ]= useState([]),
        [ conditionSearch, setConditionSearch ]= useState(''),
        [ medSearch, setMedSearch ]= useState(''),
        [ doses, setDoses ]= useState('');
    
     useEffect(() => {   
        getPatient()
    }, []);

    const getPatient = async() => {
        console.log('value',location.state.patientId)
        // const patientId = typeof location.state.patientId == "undefined" ? "" : location.state.patientId;
        const patientId = location.state.patientId;
        setPatient(patientId)
        console.log(patient)
        if (patientId == "") {
            newPatient()
        } else {
       const { data } = await API.fetchPatient(patientId)
       setGeneralInfo(data.patientData)
       setHealthInfo(data.healthData)
       setConditions(data.healthConditions)
       setContactInfo(data.contacts)
    } 
    },


     onGenInfoInputChange = e => {
        const { name, value } = e.target;
        setGeneralInfo({ ...generalInfo, [name]: value })
    }, 

    onContInfoInputChange = e => {
        const { name, value } = e.target;
        setContactInfo({ ...contactInfo, [name]: value })
    }, 

    onConditDescChange = index => e => {
        const { value } = e.target,
          clone = conditions;

        setConditText(value)

         const newDescription = {
            name: conditions[index].name,
            edit: conditions[index].edit,
            description: value
        }

        clone.splice(index, 1, newDescription)
        setConditions(clone)
    }, 

    onMedDescChange = index => e => {
        const { value } = e.target,
          clone = meds;

        setMedText(value)

         const newMed = {
            name: meds[index].name,
            edit: meds[index].edit,
            description: value
        }

        clone.splice(index, 1, newMed)
        setMeds(clone)
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
     },

    onMedInputChange = async e => {
      const { value, name } = e.target;
      setMedInput({...medInput, [ name ] : value});

      const items = await getMedNames(value)
      let suggestions = [];
      
       
      if (value.length > 0) {
          const regex = new RegExp(`^${value}`, 'i');
          suggestions = items.sort().filter( x => regex.test(x)).slice(0, 8)
        } 
        setMedSuggestions({ suggestions, text: value })
     },

    getConditionNames = async(search) => {
        const { data } = await API.getConditionNames(search);
        return  data[3].map( x => x[0]);
    },

     getMedNames = async(search) => {
        const { data }  = await API.getMedNames(search);
        return !data.displayTermsList ? "??" : data.displayTermsList.term       
    },

    selectSuggestedCondit = value => {
        setConditSuggestions({ suggestions: [], text: value })
    },
    
    selectSuggestedMed = value => {
        setMedSuggestions({ suggestions: [], text: value })
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

    onHealthInfoInputChange = e => {
        const { name, value } = e.target;
        setHealthInfo({ ...healthInfo, [name]: value })
    },

    updateDB = e => {
        if(e) {
        e.preventDefault()
        setGenState(false)
        setHealthState(false)
        }

        const data = {generalInfo, healthInfo, conditions, meds, contactInfo}
       
        API.updateEHR(patient, data)
            .catch( err => console.log(err))             
    },

    addCondition = async e => {
        e.preventDefault();
        setConditSuggestions([]);
        e.target.reset();

        const { text } = conditSuggestions;
        if (!text) {
            return;
        }
        const [ search ]  = text.split('-'),
            { data } = await API.fetchCondition(search);
    
            const description = data[0].shortdef ? data[0].shortdef.join('\n') : '';
        setConditions([...conditions, { name: text, edit: false, description }])
        updateDB()
    },

    addDoses = async e => {
        e.preventDefault();

        setMedSuggestions([]);
        const { text } = medSuggestions;
        if (!text) {
            return;
        }
        const [ search ]  = text.split('-'),
            { data } = await API.fetchMeds(search);
            const doses = data.drugGroup.conceptGroup[1].conceptProperties.map(x => x.synonym)
            setDoses(doses)            
    },

    addMeds = e => {
        e.preventDefault();
        

            const newMed = {
                medication: medInput.medication,
                dosage: medInput.dosage,
                edit : false
            }
        setMeds([...meds, newMed])
        updateDB()
    },

       
    toggleDescriptionEdit = index => {
        const arr = [];

        conditions.forEach( (item, i) => {
            
            item.edit = i === index ? !item.edit : false;
            arr.push(item)
        })
        setConditions(arr)
    },
       
    toggleMedEdit = index => {
            const arr = [];

            conditions.forEach( (item, i) => {
               
                item.edit = i === index ? !item.edit : false;
                arr.push(item)
            })
            setMeds(arr)
    },

    removeCondition = index => {
        const clone = conditions;

        clone.splice(index, 1)
        setConditions(clone)

        updateDB()
    },

    removeMed = index => {
        const clone = meds;

        clone.splice(index, 1)
        console.log("clone", clone)
        
        setMeds(clone)
        updateDB()
    },

    //if no patient gets passed, create a new one on the server.
    newPatient = async() => {
        
    
        const user  = await API.getUser(),
            email = user.data.user.email;
        console.log(email);
        const newPatient = {email, generalInfo, healthInfo, conditions, meds, contactInfo};
        console.log("newPatient -> newPatient", newPatient)

        const { data } = await API.addPatient(newPatient);
            console.log(data)
            setPatient(data._id)
        
            
    }
    

    return (
        <Container>
            <Row classes={'my-5'}>
                <Col size={'md-8'} classes={'offset-md-2'}>
                    <ContactCard
                        toggleState={() => setGenState(!editGenState)}
                        editState={editGenState}
                        data={generalInfo}
                        target={onGenInfoInputChange}
                        formSubmit={updateDB}
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
                    />
                </Col>
            </Row>
            <Row classes={'my-5'}>
                <Col size={'md-8'} classes={'offset-md-2'}>
                    <Conditions
                        toggleState={() => setConditState(!editConditState)}

                        editState={editConditState} 
                        toggleDescState={() => setDescEditState(!descEditState)}
                        editDescState={descEditState} 

                        editState={editConditState}
                        toggleDescState={toggleDescriptionEdit}
                        editDescState={descEditState}

                        editState={editConditState}
                        toggleDescState={toggleDescriptionEdit}
                        remove={removeCondition}
                        areaTarget={onConditDescChange}
                        data={conditions}
                        target={onConditInputChange}
                        renderSuggestions={renderConditSuggestions}
                        text={conditSuggestions.text}
                        formSubmit={addCondition}
                      />
                </Col>
            </Row>
            <Row classes={'my-5'}>
                <Col size={'md-8'} classes={'offset-md-2'}>
                    <Medications
                        toggleState={() => setMedsState(!editMedsState)}
                        editState={editMedsState}
                        toggleMedState={toggleMedEdit}
                        areaTarget={onMedDescChange}
                        data={meds}
                        target={onMedInputChange}
                        renderSuggestions={renderMedSuggestions}
                        text={medSuggestions.text}
                        remove={removeMed}
                        addDoses={addDoses}
                        formSubmit={addMeds}
                        doseChoices={doses}
                      />
                </Col>
            </Row>
            {/* <Col size={'md-8'} classes={'offset-md-2'}>
                    <Contacts
                        toggleState={() => setContState(!editContState)}
                        editState={editContState}
                        data={contactInfo}
                        target={onContInfoInputChange}
                        formSubmit={updateDB}
                    />
                </Col> */}
        </Container>
    )
}

