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
    
if (editState) {
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
                            {getAge(data.dob)}
                            </div>
                    </Col>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Blood Type</label>
                        <Input value={data.blood_type} name="nickname"
                        style={input}
                        placeholder={"e.g. 'Mom'"} 
                        onChange={target} 
                        />
                    </Col>
                </div>
                <div className="form-row">
                    <Col size={'md-6'} classes={'form-group'}>
                        <label>Address Line 1</label>
                        <Input value={data.address_one} name="address_one"
                        style={input}
                        onChange={target} 
                        />                    </Col>
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

function boodTypes() {
  return (
    <select id="" class="form-control">
        <option selected>Choose...</option>
        <option>A-positive</option>
        <option>A-negative</option>
        <option>B-positive</option>
        <option>B-negative</option>
        <option>AB-positive</option>
        <option>AB-negative</option>
        <option>O-positive</option>
        <option>O-negative</option>
    </select>
  )
 }