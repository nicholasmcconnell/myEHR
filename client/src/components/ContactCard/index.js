import React from 'react'
import { Col } from '../Grid';
import { Input, Button } from '../Forms';


export function ContactCard({ data, target, editState, toggleState, formSubmit }) {

if (editState) {
    return (
        <div className={'my-5'}>
          <Col size={'md-12'}>
                <Button className="fas fa-backspace fa-2x" style={cancelBtn} 
                onClick={toggleState} />
            </Col>
            <form onSubmit={formSubmit} >
                <div className={"form-row"}>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>First Name</label>
                        <Input value={data.firstName} name="firstName"
                        style={input}
                        onChange={target} 
                        />
                    </Col>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Last Name</label>
                        <Input value={data.lastName} name="lastName"
                        style={input}
                        onChange={target} 
                        />
                    </Col>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Nickname</label>
                        <Input value={data.nickname} name="nickname"
                        style={input}
                        placeholder={"e.g. 'Mom'"} 
                        onChange={target} 
                        />
                    </Col>
                </div>
                <div className="form-row">
                    <Col size={'md-6'} classes={'form-group'}>
                        <label>Address Line 1</label>
                        <Input value={data.addressOne} name="addressOne"
                        style={input}
                        onChange={target} 
                        />                    </Col>
                    <Col size={'md-6'} classes={'form-group'}>
                        <label>Address Line 2</label>
                        <Input value={data.addressTwo} name="addressTwo"
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
                    type="submit" > <i className="fas fa-sync-alt fa-2x mr-2"/> {' '}  
                        {' '} update 
                    </Button>
                </Col>
            </form>
        </div>
    )
    } else {
        return (
            <div className={'my-5 gen-info'}>
                <Col size={'md-12'} classes={'gen-edit'}>
                    <Button className="fas fa-user-edit fa-2x" style={editBtn} 
                        onClick={toggleState} 
                    />   
                </Col>
            <form>
                <div className={"form-row"}>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>First Name:</label>
                        <div style={fieldText}>{data.firstName}</div>
                    </Col>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Last Name:</label>
                        <div style={fieldText}>{data.lastName}</div>
                    </Col>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Nickname:</label>
                        <div style={fieldText}>{data.nickname}</div>
                    </Col>
                </div>
                <div className="form-row">
                    <Col size={'md-6'} classes={'form-group'}>
                        <label>Address line 1:</label>
                        <div style={fieldText}>{data.addressOne}</div>
                    </Col>
                    <Col size={'md-6'} classes={'form-group'}>
                        <label>Address line 2:</label>
                        <div style={fieldText}>{data.addressTwo}</div>
                    </Col>
                </div>
                <div className="form-row">
                    <Col size={'md-3'} classes={'form-group'}>
                        <label>City:</label>
                        <div style={fieldText}>{data.city}</div>
                    </Col>
                    <Col size={'md-3'} classes={'form-group'}>
                        <label>State/Providence:</label>
                        <div style={fieldText}>{data.state}</div>
                    </Col>
                    <Col size={'md-3'} classes={'form-group'}>
                        <label>Zip/Postal Code:</label>
                        <div style={fieldText}>{data.zip}</div>
                    </Col>
                    <Col size={'md-3'} classes={'form-group'}>
                        <label>Country:</label>
                        <div style={fieldText}>{data.country}</div>
                    </Col>
                </div>
                <div className="form-row">
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Phone Number:</label>
                        <div style={fieldText}>{data.phone}</div>
                    </Col>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Email:</label>
                        <div style={fieldText}>{data.email}</div>
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