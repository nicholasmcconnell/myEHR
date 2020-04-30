import React from 'react'
import { Col } from '../Grid';
import { Input, Button, TextArea } from '../Forms';


export function HealthInfo({ data, target, editState, toggleState, formSubmit }) {

    const getAge = DOB => {

        const today = new Date(),
         birthDate = new Date(DOB),
          month = today.getMonth() - birthDate.getMonth();
        let age = today.getFullYear() - birthDate.getFullYear();
          
    return month < 0 || (month === 0 && today.getDate() < birthDate.getDate()) ? age - 1 : age;
    },

     bloodTypes = bloodType => {
    
        const types = ['Unknown', 'A-Positive', 'A-Negative', 'B-Positive', 'B-Negative', 'AB-Positive', 'AB-Negative', 'O-Positive', 'O-Negative']
    
    return types.map( type => type === bloodType ? <option selected>{bloodType}</option> : <option>{type}</option>)
     };
    
if (editState) {
    return (
        <div className={'mt-5'}>
          <Col size={'md-12'}>
                <Button className="fas fa-backspace fa-2x" style={cancelBtn} 
                onClick={toggleState} />
            </Col>
            <form onSubmit={formSubmit} >
                <div className={"form-row"}>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Date of Birth</label>
                        <Input name="dob" placeholder="MM/DD/YYYY"
                        value={data.dob}
                        style={input}
                        onChange={target} 
                        />
                    </Col>
                    <Col size={'md-2'} classes={'form-group'}>
                        <label>Age</label>
                        <div style={fieldText}>
                            {getAge('06/12/1929')}
                        </div>
                    </Col>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Blood Type</label>
                        <select style={input} name="bloodType" class="form-control">
                            {bloodTypes(data.bloodType)}
                        </select>
                    </Col>
                </div>
                <div className="form-row">
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Insurance Plan</label>
                        <Input value={data.insurance} name="insurance"
                        style={input}
                        onChange={target} 
                        />                    
                    </Col>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Number</label>
                        <Input value={data.insNumber} name="insNumber"
                        style={input}
                        onChange={target} 
                        />                    
                    </Col>
                    <Col size={'md-2'} classes={'form-group'}>
                        <label>Rx BIN</label>
                        <Input value={data.rxBin} name="rxBin"
                        style={input}
                        onChange={target} 
                        />                    
                    </Col>
                    <Col size={'md-2'} classes={'form-group'}>
                        <label>Rx PCN</label>
                        <Input value={data.rxPcn} name="rcPcn"
                        style={input}
                        onChange={target} 
                        />
                    </Col>
                </div>
                <div className="form-row">
                    <Col size={'md-6'} classes={'form-group'}>
                        <label>Allergies</label>
                        <TextArea value={data.allergies} name="allergies"
                        style={input}
                        onChange={target} 
                        />
                    </Col>
                    <Col size={'md-6'} classes={'form-group'}>
                        <label>Immunizations (include dates received)</label>
                        <TextArea value={data.immunizations} name="immunizations"
                        style={input}
                        onChange={target} 
                        />
                    </Col>
                </div>
                <Col size={'md-12'}>
                <Button className="btn" style={updtBtn} 
                    type="submit" > <i className="fas fa-sync-alt fa-2x mr-2"/> {' '}  
                        {' '} update 
                    </Button>
                </Col>
            </form>
        </div>
        )
    } else {
        return (
            <div className={'mt-5 health-info'}>
                <Col size={'md-12'} classes={'gen-edit'}>
                    <Button className="fas fa-user-edit fa-2x" style={editBtn} 
                        onClick={toggleState} 
                    />   
                </Col>
            <form>
                <div className={"form-row"}>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Date of Birth:</label>
                        <div style={fieldText}>{data.dob}</div>
                    </Col>
                    <Col size={'md-2'} classes={'form-group'}>
                        <label>Age:</label>
                        <div style={fieldText}>
                            {getAge(data.dob)}
                        </div>
                    </Col>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Blood Type:</label>
                        <div style={fieldText}>{data.bloodType}</div>
                    </Col>
                </div>
                <div className="form-row">
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Insurance Plan:</label>
                        <div style={fieldText}>{data.insurance}</div>
                    </Col>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Number:</label>
                        <div style={fieldText}>{data.insNumber}</div>
                    </Col>
        
                    <Col size={'md-2'} classes={'form-group'}>
                        <label>Rx BIN:</label>
                        <div style={fieldText}>{data.rxBin}</div>
                    </Col>
                    <Col size={'md-2'} classes={'form-group'}>
                        <label>Rx PCN:</label>
                        <div style={fieldText}>{data.rxPcn}</div>
                    </Col>
                </div>
                <div className="form-row">
                    <Col size={'md-6'} classes={'form-group'}>
                        <label>Allergies:</label>
                        <div style={fieldText}>{data.allergies}</div>
                    </Col>
                    <Col size={'md-6'} classes={'form-group'}>
                        <label>Immunizations (include dates received):</label>
                        <div style={fieldText}>{data.immunizations}</div>
                    </Col>
                </div>
            </form>
         </div>
        )
    }
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
    color: 'white',
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