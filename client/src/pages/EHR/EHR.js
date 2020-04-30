import React, { useState } from 'react';
import { Container, Row, Col } from '../../components/Grid';
import { ContactInfo } from '../../components/ContactInfo';
import { HealthInfo } from '../../components/HealthInfo';
import API from '../../utils/API';

export default function UserInfo({ usrId }) {

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
     [healthInfo, setHealthInfo] = useState({
        dob: '06/12/1929',
        bloodType: 'A-Negative',
        insurance: 'Keystone POS Flex',
        insNumber: 'QCG130515482-01',
        rxBin: '123456',
        rxPcn: '060503900',
        allergies: 'Peanuts, Shellfish, People',
        immunizations: 'HPV on 5/16/2018',
        notes: 'Breast Cancer!!  Patient likes talk a lot.',
    }),
        [editGenState, setGenState ]= useState(false),
        [editHealthState, setHealthState ]= useState(false),
    


    onGenInfoInputChange = e => {
        const { name, value } = e.target;
        setGeneralInfo({...generalInfo, [name]: value })
    }, 

    onHealthInfoInputChange = e => {
        const { name, value } = e.target;
        setHealthInfo({...healthInfo, [name]: value })
    }, 
    updateDB = e => {
        e.preventDefault()
          API.updatePatientInfo(usrId, generalInfo)
          .then( data => {
              if (data.status === 'success') {
                console.log('Updated record!', 'green')
             } else  {
                console.log('Fail to update record.', 'red')
             }  
          })
    };


    return (
        <Container>
            <Row classes={'my-5'}>
                <Col size={'md-8'} classes={'offset-md-2'}>
                    <ContactInfo 
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
                    <HealthInfo 
                        toggleState={() => setHealthState(!editHealthState)}
                        editState={editHealthState} 
                        data={healthInfo}
                        target={onHealthInfoInputChange}
                        formSubmit={updateDB}
                    />
                </Col>
           </Row>
        </Container>
    )

    // return (
    //     <Container>
    //         <form>
    //             <div class="form-row">
    //                 <div class="form-group col-md-6">
    //                 <label for="">First Name</label>
    //                 <input type="" class="form-control" placeholder=""/>
    //                 </div>
    //                 <div class="form-group col-md-6">
    //                 <label for="">Last Name</label>
    //                 <input type="" class="form-control" placeholder=""/>
    //                 </div>
    //             </div>
    //             <div class="form-group">
    //                 <label for="inputAddress">Birthdate</label>
    //                 <input type="text" class="form-control"  placeholder="mm/dd/yyyy"/>
    //             </div>
    //             <div class="form-group">
    //                 <label for="">Blood Type</label>
    //                 <select id="" class="form-control">
    //                     <option selected>Choose...</option>
    //                     <option>A-positive</option>
    //                     <option>A-negative</option>
    //                     <option>B-positive</option>
    //                     <option>B-negative</option>
    //                     <option>AB-positive</option>
    //                     <option>AB-negative</option>
    //                     <option>O-positive</option>
    //                     <option>O-negative</option>
    //                 </select>
    //             </div>
    //                 <div class="form-group">
    //                     <label for="">Allergies</label>
    //                     <textarea type="text" class="form-control" id=""/>
    //                 </div>
    //                 <div class="form-group">
    //                     <label for="">Diagnoses</label>
    //                     <textarea type="text" class="form-control" id=""/>
    //                 </div>
    //                 <div class="form-group">
    //                     <label for="">Family History</label>
    //                     <textarea type="text" class="form-control" id=""/>
    //                 </div>
    //                 <div class="form-group row">
    //                     <div class="col-md-6">
    //                         <button type="submit" class="btn btn-primary">Save</button>
    //                     </div>
    //                     <div class="col-md-6">
    //                         <button type="" class="btn btn-primary">Delete</button>
    //                     </div>
    //                 </div>
    //         </form>
    //     </Container>
    // )
}

