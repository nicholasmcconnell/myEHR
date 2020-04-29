import React from 'react'
import { Col } from '../Grid';
import { Input, Button } from '../Forms';


export function HealthInfo({ data, target, editState, toggleState, formSubmit }) {


    const getAge = DOB => {

        const today = new Date(),
         birthDate = new Date(DOB),
          month = today.getMonth() - birthDate.getMonth();
        let age = today.getFullYear() - birthDate.getFullYear();
          
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age = age - 1;
        }
        return age;
    }
    
if (!editState) {
    return (
        <div className={'mt-5'}>
          <Col size={'md-12'}>
                <Button className="fas fa-backspace fa-3x" style={cancelBtn} 
                onClick={toggleState} />
            </Col>
            <form onSubmit={formSubmit} >
                <div className={"form-row"}>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Date of Birth</label>
                        <Input value={data.dob} name="dob"
                        style={input}
                        onChange={target} 
                        />
                    </Col>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Age</label>
                        <div style={fieldText}>
                            {getAge('06/12/1929')}
                        </div>
                    </Col>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Blood Type</label>
                        <select id="" class="form-control">
                            <BloodTypes bloodType={'A-negative'} 
                            />
                        </select>
                    </Col>
                </div>
                <div className="form-row">
                    <Col size={'md-6'} classes={'form-group'}>
                        <label>Address Line 1</label>
                        <Input value={data.address_one} name="address_one"
                        style={input}
                        onChange={target} 
                        />                    
                    </Col>
                    <Col size={'md-6'} classes={'form-group'}>
                        <label>Address Line 2</label>
                        <Input value={data.address_two} name="address_two"
                        style={input}
                        onChange={target} 
                        />                    
                    </Col>
                </div>
                <div className="form-row">
                    <Col size={'md-3'} classes={'form-group'}>
                        <label>City</label>
                        <Input value={data.city} name="city"
                        style={input}
                        onChange={target} 
                        />
                    </Col>
                    <Col size={'md-3'} classes={'form-group'}>
                        <label>State/Providence</label>
                        <Input value={data.state} name="state"
                        style={input}
                        onChange={target} 
                        />
                    </Col>
                    <Col size={'md-3'} classes={'form-group'}>
                        <label>Zip/Postal Code</label>
                        <Input value={data.zip} name="zip"
                        style={input}
                        onChange={target} 
                        />
                    </Col>
                    <Col size={'md-3'} classes={'form-group'}>
                        <label>Country</label>
                        <Input value={data.country} name="country"
                        style={input}
                        onChange={target} 
                        />
                    </Col>
                </div>
                    <div className="form-row">
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Phone Number</label>
                        <Input value={data.phone} name="phone"
                        style={input}
                        onChange={target} 
                        />
                    </Col>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Email</label>
                        <Input value={data.email} name="email"
                        style={input}
                        onChange={target} 
                        />
                    </Col>
                    </div>
                <Col size={'md-12'}>
                <Button className="btn" style={updtBtn} 
                    type="submit" > <i className="fas fa-sync-alt fa-2x"/> {' '}  
                        {' '} update 
                    </Button>
                </Col>
            </form>
        </div>
        )
    }
}

const BloodTypes = ({ bloodType }) => {
    
    const types = ['Unknown', 'A-positive', 'A-negative', 'B-positive', 'B-negative', 'AB-positive', 'AB-negative', 'O-positive', 'O-negative']

return types.map( type => type === bloodType ? <option selected>{bloodType}</option> : <option>{type}</option>)
 }


const fieldText = {
    fontStyle: 'italic',
    fontWeight: '1000',
    fontSize: '100%',
    padding: '10px',
    paddingLeft: '0',
    color: 'black'
},
editBtn = {
    float: 'right',
    border: 'none',
    margin: '0',
    color: 'green',
    backgroundColor: 'white'
},
cancelBtn = {
    float: 'right',
    border: 'none',
    margin: '0',
    color: 'tomato',
    backgroundColor: 'white'
},
updtBtn = {
    float: 'right',
    margin: '0',
    backgroundColor: '#214c91',
    color: 'white'
},
input = {
    borderBottom: '1px solid rgba(0, 0, 0, .2)',
    transition: 'all 0.30s ease-in-out'
}