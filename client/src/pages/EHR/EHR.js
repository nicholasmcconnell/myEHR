import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from '../../components/Grid';
import { Input } from '../../components/Forms';
import { ContactCard } from '../../components/ContactCard';
import { HealthCard } from '../../components/HealthCard';
import { Conditions } from '../../components/Conditions';
import { Medications } from '../../components/Medications';
import API from '../../utils/API';

export default function EHR({ usrId }) {

    const [generalInfo, setGeneralInfo] = useState({
        first_name: 'Anne',
        last_name: 'Frank',
        nickname: 'Mrs. Quack',
        address_one: '555 Somewhere',
        address_two: 'Apt 7',
        city: 'Frankfurt',
        state: 'Darmstadt',
        zip: '12345',
        country: 'Germany',
        phone: '(264) 224-1234',
        email: 'quacky123@gmail.com'
    }),
     [ healthInfo, setHealthInfo ] = useState({
        // dob: '06/12/1929',
        // bloodType: 'A-Negative',
        // insurance: 'Keystone POS Flex',
        // insNumber: 'QCG130515482-01',
        // rxBin: '123456',
        // rxPcn: '060503900',
        // allergies: 'Peanuts, Shellfish, People',
        // immunizations: 'HPV on 5/16/2018',
        // notes: 'Breast Cancer!!  Patient likes talk a lot.',
    }),
        [ conditions, setConditions ] = useState([]),
        [ meds, setMeds ] = useState([]),
        [ medInput, setMedInput ] = useState(''),
        [ editGenState, setGenState ]= useState(false),
        [ editHealthState, setHealthState ]= useState(false),
        [ editConditState, setConditState ]= useState(false),
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
    

    const onGenInfoInputChange = e => {
        const { name, value } = e.target;
        setGeneralInfo({ ...generalInfo, [name]: value })
        loadProfiles();
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
        return data.displayTermsList.term       
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

    onConditionSearchChange = e => {
        const { name, value } = e.target;
        setConditionSearch({ ...conditionSearch, [name]: value })
    },

    updateDB = () => {
        // e.preventDefault()
        API.updateEHR()
            .then((res) => {
                console.log(res);
                // if (data.status === 'success') {
                //     console.log('Updated record!', 'green')
                // } else {
                //     console.log('Fail to update record.', 'red')
                // }
            })
            .catch((err) => console.log(err))             
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
                { data } = await API.fetchCondition(search),

                description = data[0].shortdef ? data[0].shortdef.join('\n') : '';

            setConditions([...conditions, { name: text, edit: false, description }])
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
            e.target.reset()

                const newMed = {
                    medication: medInput.medication,
                    dosage: medInput.dosage,
                    edit : false
                }

            setMeds([...meds, newMed])
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
        }



    useEffect(() => {   
        loadProfiles()
    }, []);

    function loadProfiles() {
        API.fetchPatients()
          .then(res => 
            // setGeneralInfo(res.data)
            console.log(res.data)
          )
          .catch(err => console.log(err));
      };

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

