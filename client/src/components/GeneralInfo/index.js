import React from 'react'
import { Col } from '../Grid';
import { Input, Button } from '../Forms';


export function GeneralInfo({ data, target, editState, toggleState, formSubmit, name }) {

if (editState) {
    return (
        <div className={'my-5'}>
        <em><h5 style={{textDecoration: "underline"}}>
            {name ? `${name}'s` : ''} Contact Information:</h5></em>
        
          <Col size={'md-12'} classes={"mt-5"}>
                <Button className="fas fa-backspace fa-2x" 
                style={{ ...toggleBtn, color: "#d9534f" }} 
                onClick={toggleState} />
            </Col>
            <form onSubmit={formSubmit} >
                <div className={"form-row"}>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>First Name</label>
                        <Input value={data ? data.firstName : ''} name="firstName"
                        style={input}
                        onChange={target} 
                        />
                    </Col>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Last Name</label>
                        <Input value={data ? data.lastName : ''} name="lastName"
                        style={input}
                        onChange={target} 
                        />
                    </Col>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Nickname</label>
                        <Input value={data ? data.nickname : ''} name="nickname"
                        style={input}
                        placeholder={"e.g. 'Mom'"} 
                        onChange={target} 
                        />
                    </Col>
                </div>
                <div className="form-row">
                    <Col size={'md-6'} classes={'form-group'}>
                        <label>Address Line 1</label>
                        <Input value={data ? data.addressOne : ''} name="addressOne"
                        style={input}
                        onChange={target} 
                        />                    </Col>
                    <Col size={'md-6'} classes={'form-group'}>
                        <label>Address Line 2</label>
                        <Input value={data ? data.addressTwo : ''} name="addressTwo"
                        style={input}
                        onChange={target} 
                        />                    
                    </Col>
                </div>
                <div className="form-row">
                    <Col size={'md-3'} classes={'form-group'}>
                        <label>City</label>
                        <Input value={data ? data.city : ''} name="city"
                        style={input}
                        onChange={target} 
                        />
                    </Col>
                    <Col size={'md-3'} classes={'form-group'}>
                        <label>{window.innerWidth > 992 ? 'State/Providence:' : 'State:'}</label>
                        <Input value={data ? data.state : ''} name="state"
                        style={input}
                        onChange={target} 
                        />
                    </Col>
                    <Col size={'md-3'} classes={'form-group'}>
                        <label>Zip/Postal Code</label>
                        <Input value={data ? data.zip : ''} name="zip"
                        style={input}
                        onChange={target} 
                        />
                    </Col>
                    <Col size={'md-3'} classes={'form-group'}>
                        <label>Country</label>
                        <Input value={data ? data.country : ''} name="country"
                        style={input}
                        onChange={target} 
                        />
                    </Col>
                </div>
                    <div className="form-row">
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Phone Number</label>
                        <Input value={data ? data.phone : ''} name="phone"
                        style={input}
                        onChange={target} 
                        />
                    </Col>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Email</label>
                        <Input value={data ? data.email : ''} name="email"
                        style={input}
                        onChange={target} 
                        />
                    </Col>
                    </div>
                <Col size={'md-12'}>
                <Button className="btn" style={updtBtn} 
                    type="submit" > <i className="fas fa-sync-alt mr-2"/> {' '}  
                        {' '} update 
                    </Button>
                </Col>
            </form>
        </div>
    )
    } else {
        return (
            <div className={'my-5 gen-info'}>
                <em><h5 style={{textDecoration: "underline"}}>
                {name ? `${name}'s` : ''} Contact Information:</h5></em>

                <Col size={'md-12'} classes={'mt-5'}>
                    <Button className="fas fa-user-edit fa-2x" style={toggleBtn} 
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
                        <label>{window.innerWidth > 992 ? 'State/Providence:' : 'State:'}</label>
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
    padding: '10px 10px 10px 0',
    color: 'black'
},
toggleBtn = {
    float: 'right',
    border: 'none',
    margin: '0',
    color: 'white',
    backgroundColor: 'white'
},
updtBtn = {
    float: 'right',
    margin: '0',
    backgroundColor: '#214c91',
    color: 'white',
    padding: ".4rem .75rem"
},
input = {
    borderBottom: '1px solid rgba(0, 0, 0, .2)',
    transition: 'all 0.30s ease-in-out'
}