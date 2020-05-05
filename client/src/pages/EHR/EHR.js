import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from '../../components/Grid';
import { Input } from '../../components/Forms';
import { ContactCard } from '../../components/ContactCard';
import { HealthCard } from '../../components/HealthCard';
import { Conditions } from '../../components/Conditions';
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
        [ editGenState, setGenState ]= useState(false),
        [ editHealthState, setHealthState ]= useState(false),
        [ editConditState, setConditState ]= useState(false),
        [ descEditState, setDescEditState ]= useState(false),
        [ conditSuggestions, setConditSuggestions ]= useState([]),
        [ conditionSearch, setConditionSearch ]= useState('');
    

    const onGenInfoInputChange = e => {
        const { name, value } = e.target;
        setGeneralInfo({ ...generalInfo, [name]: value })
        loadProfiles();
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

     getConditionNames = async(search) => {
        const { data } = await API.getConditionNames(search);
        return  data[3].map( x => x[0] );
    },

    selectSuggestedCondit = value => {
        setConditSuggestions({ suggestions: [], text: value })
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
            const [search] = text.split('-'),
                { data } = await API.fetchCondition(search),

                description = data[0].shortdef ? data[0].shortdef.join('\n') : '';

            setConditions([...conditions, { name: text, description }])
        }


    useEffect(() => {   
        loadProfiles()
    }, []);

    function loadProfiles() {
        API.fetchPatients()
          .then(res => 
            setGeneralInfo(res.data[0])
            // console.log(res.data)
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
                        toggleDescState={() => setDescEditState(!descEditState)}
                        editDescState={descEditState} 
                        data={conditions}
                        target={onConditInputChange}
                        renderSuggestions={renderConditSuggestions}
                        text={conditSuggestions.text}
                        formSubmit={addCondition}
                      />
                </Col>
            </Row>
        </Container>
    )
}

