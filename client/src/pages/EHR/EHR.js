import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col } from '../../components/Grid';
import { ContactCard } from '../../components/ContactCard';
import { HealthCard } from '../../components/HealthCard';
import { Conditions } from '../../components/Conditions';
import { Medications } from '../../components/Medications';
import Contacts from '../../components/Contacts';
import API from '../../utils/API';

//Custom hook to track previous states for comparison purposes.
const usePrevious = value => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    }, [value]);
    return ref.current;
  }


export default function EHR({ location }) {

    const [generalInfo, setGeneralInfo] = useState({}),
        [ healthInfo, setHealthInfo ] = useState({}),
        [ contactInfo, setContactInfo ] = useState([]),
        [ patient, setPatient ] = useState(location.state.patientId),
        [ conditions, setConditions ] = useState([]),
        [ meds, setMeds ] = useState([]),
        [ medInput, setMedInput ] = useState(''),
        [ editGenState, setGenState ]= useState(false),
        [ editHealthState, setHealthState ] = useState(false),
        [ editConditState, setConditState ] = useState(false),
        [ editMedsState, setMedsState ]= useState(false),
        [ , setConditText ]= useState(''),
        [ , setMedText ]= useState(''),
        [ descEditState, setDescEditState ]= useState(false),
        [ conditSuggestions, setConditSuggestions ]= useState([]),
        [ medSuggestions, setMedSuggestions ]= useState([]),
        [ doses, setDoses ]= useState(''),

      previousMed = usePrevious(medInput.medication),
      isInitialMount = useRef(true);
    
    //only use this effect on subsequent mounts, excluding the initial. 
    useEffect(() => {   
        if (isInitialMount.current) {
            isInitialMount.current = false;
            getPatient()
        } else {
            updateDB()
         }
    }, []);

    const getPatient = async() => {

        if (patient === "") {
            newPatient()
        } else {
        const { data } = await API.fetchPatient(patient)
            
            setGeneralInfo(data.patientData)
            setHealthInfo(data.healthData)
            setConditions(data.healthConditions)
            setMeds(data.medications)
            setContactInfo(data.contacts)
        } 
    },


    onGenInfoInputChange = e => {
        const { name, value } = e.target;
        setGeneralInfo({ ...generalInfo, [name]: value })
    }, 

    onHealthInfoInputChange = e => {
        const { name, value } = e.target;
        setHealthInfo({ ...healthInfo, [name]: value })
    },

    onContInfoInputChange = e => {
        const { name, value } = e.target;
        setContactInfo({ ...contactInfo, [name]: value })
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
       const { name, value } = e.target; 
       setMedInput({ ...medInput, [name]: value });

    //run this code only when medication input is changed. ignore dosage.
    if (previousMed !== medInput.medication) {

      const items = await getMedNames(value)
      let suggestions = [];
      
      if (value.length > 0) {
          const regex = new RegExp(`^${value}`, 'i');
          suggestions = items.sort().filter( x => regex.test(x)).slice(0, 8)
        } 
        setMedSuggestions({ suggestions, text: value })
    }
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

        setMedText(value)  //is this function even being used?

         const newMed = {
            name: meds[index].name,
            edit: meds[index].edit,
            description: value
        }

        clone.splice(index, 1, newMed)
        setMeds(clone)
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
    },

    addMeds = e => {
        e.preventDefault();
        e.target.reset();

        let { text } = medSuggestions;
           text = text.split(' ');

            const newMed = {
                medication: text[0],
                dosage: medInput.dosage,
                edit : false
            }
        setDoses('')
        setMedSuggestions([])
        setMeds([...meds, newMed])
    },


    addDoses = async e => {
        e.preventDefault();

        const { text } = medSuggestions;
        if (!text) {
            return;
        }
        try {
            const  { data } = await API.fetchMeds(text),
              doses = data.drugGroup.conceptGroup[1].conceptProperties.map(x => x.synonym)

            setDoses(doses)   
        } catch(err)    {
            console.log(err)
        }
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
    },

    removeMed = index => {
        const clone = meds;

        clone.splice(index, 1)
        setMeds(clone)
    },

    //if no patient is passed in, create a new one on the server.
    newPatient = async() => {
    
        const user  = await API.getUser(),
            email = user.data.user.email;
   
        const newPatient = {email, generalInfo, healthInfo, conditions, meds, contactInfo};

        const { data } = await API.addPatient(newPatient);

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
        </Container>
    )
}

