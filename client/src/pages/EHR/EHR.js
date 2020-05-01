import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from '../../components/Grid';
import { Input } from '../../components/Forms';
import { ContactCard } from '../../components/ContactCard';
import { HealthCard } from '../../components/HealthCard';
import { Conditions } from '../../components/Conditions';
import API from '../../utils/API';

export default function EHR({ usrId }) {

    const [ generalInfo, setGeneralInfo ] = useState({
        // first_name: 'Anne',
        // last_name: 'Frank',
        // nickname: 'Mrs. Quack',
        // address_one: '555 Somewhere',
        // address_two: 'Apt 7',
        // city: 'Frankfurt',
        // state: 'Darmstadt',
        // zip: '12345',
        // country: 'Germany',
        // phone: '(264) 224-1234',
        // email: 'quacky123@gmail.com'
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
        [ editGenState, setGenState ]= useState(false),
        [ editHealthState, setHealthState ]= useState(false),
        [ editConditState, setConditState ]= useState(false),
        [ conditions, setConditions ]= useState({}),
        [ conditionSearch, setConditionSearch ]= useState('');
    
    useEffect(() => {
        searchCondition()
    }, [conditionSearch])

    const onGenInfoInputChange = e => {
        const { name, value } = e.target;
        setGeneralInfo({...generalInfo, [name]: value })
        loadProfiles();
    }, 

    onHealthInfoInputChange = e => {
        const { name, value } = e.target;
        setHealthInfo({...healthInfo, [name]: value })
    }, 

    onConditionSearchChange = e => {
        const { name, value } = e.target;
        setConditionSearch({...conditionSearch, [name]: value })
    }, 

    updateDB = e => {
        e.preventDefault()
          API.updateEHR(usrId, generalInfo)
          .then( data => {
              if (data.status === 'success') {
                console.log('Updated record!', 'green')
             } else  {
                console.log('Fail to update record.', 'red')
             }  
          })
    },

    searchCondition = async() => {
        
        const { data } = await API.getCondition(conditionSearch),
           
         results = data[3].map( x => x[0] );
            console.log(results);
    };

    useEffect(() => {
        loadProfiles()
    }, []);

    function loadProfiles() {
        API.fetchProfile()
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
                        target={onConditionSearchChange}
                        formSubmit={updateDB}
                      />
                {/* <Input onChange={onConditionSearchChange} name="conditionSearch" /> */}
                </Col>
           </Row>
        </Container>
    )
}

