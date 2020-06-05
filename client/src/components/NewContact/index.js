import React from 'react'
import { Col } from '../../components/Grid';
import { Input, Button } from '../../components/Forms';


export function NewContact({ target, toggleState, formSubmit }) {

    return (
    <div className={'my-5'}>
        <Col size={'md-12'}>
            <Button className="fas fa-backspace fa-2x" style={cancelBtn} 
            onClick={toggleState} />
        </Col>
        <form onSubmit={formSubmit} >
            <div className={"form-row"}>
                <Col size={'md-4'} classes={'form-group'}>
                    <label>Contact for</label>
                    <Input name="contact" 
                    placeholder="PCP, Pharmacy, etc.."
                    style={input}
                    onChange={target} 
                    />
                </Col>
                <Col size={'md-4'} classes={'form-group'}>
                    <label>Office or Business Name</label>
                    <Input name="office"
                    placeholder="Vandelay Industries"
                    style={input}
                    onChange={target} 
                    />
                </Col>
                <Col size={'md-4'} classes={'form-group'}>
                    <label>Contact Name</label>
                    <Input name="name" 
                    placeholder="Art Vandelay"
                    style={input}
                    onChange={target} 
                    />
                </Col>
            </div>
            <div className="form-row">
                <Col size={'md-6'} classes={'form-group'}>
                    <label>Address Line 1</label>
                    <Input name="addressOne"
                    style={input}
                    onChange={target} 
                    />                    </Col>
                <Col size={'md-6'} classes={'form-group'}>
                    <label>Address Line 2</label>
                    <Input name="addressTwo"
                    style={input}
                    onChange={target} 
                    />                    
                </Col>
            </div>
            <div className="form-row">
                <Col size={'md-3'} classes={'form-group'}>
                    <label>City</label>
                    <Input name="city"
                    style={input}
                    onChange={target} 
                    />
                </Col>
                <Col size={'md-3'} classes={'form-group'}>
                    <label>State/Providence</label>
                    <Input name="state"
                    style={input}
                    onChange={target} 
                    />
                </Col>
                <Col size={'md-3'} classes={'form-group'}>
                    <label>Zip/Postal Code</label>
                    <Input name="zip"
                    style={input}
                    onChange={target} 
                    />
                </Col>
                <Col size={'md-3'} classes={'form-group'}>
                    <label>Country</label>
                    <Input name="country"
                    style={input}
                    onChange={target} 
                    />
                </Col>
            </div>
            <div className="form-row">
                <Col size={'md-4'} classes={'form-group'}>
                    <label>Primary Phone</label>
                    <Input name="primaryPhone"
                    style={input}
                    onChange={target} 
                    />
                </Col>
                <Col size={'md-2'} classes={'form-group'}>
                    <label>Ext.</label>
                    <Input name="primaryExt"
                    style={input}
                    onChange={target} 
                    />
                </Col>
                <Col size={'md-4'} classes={'form-group'}>
                    <label>Another Phone</label>
                    <Input name="secondaryPhone"
                    style={input}
                    onChange={target} 
                    />
                </Col>
                <Col size={'md-2'} classes={'form-group'}>
                    <label>Ext.</label>
                    <Input name="secondaryExt"
                    style={input}
                    onChange={target} 
                    />
                </Col>
                </div>
                <div className="form-row">
                <Col size={'md-4'} classes={'form-group'}>
                    <label>Fax</label>
                    <Input name="fax"
                    style={input}
                    onChange={target} 
                    />
                </Col>
                <Col size={'md-4'} classes={'form-group'}>
                    <label>Email</label>
                    <Input name="email"
                    style={input}
                    onChange={target} 
                    />
                </Col>
                <Col size={'md-4'} classes={'form-group'}>
                    <label>Website</label>
                    <Input name="website"
                    style={input}
                    onChange={target} 
                    />
                </Col>
            </div>
            <Col size={'md-12'}>
            <Button className="btn" style={saveBtn} 
                type="submit" > <i className="fa fa-address-book mr-2"/> {' '}  
                    {' '} Save 
                </Button>
            </Col>
        </form>
    </div> 
    )
}

const cancelBtn = {
    float: 'right',
    border: 'none',
    margin: '0',
    color: 'tomato',
    backgroundColor: 'white'
},
saveBtn = {
    float: 'right',
    margin: '0',
    backgroundColor: '#55595c',
    color: 'white',
},
input = {
    borderBottom: '1px solid rgba(0, 0, 0, .2)',
    transition: 'all 0.30s ease-in-out'
}