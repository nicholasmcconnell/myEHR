import React from 'react'
import { Col } from '../../components/Grid';
import { NewContact } from '../../components/NewContact';
import { Input, Button } from '../../components/Forms';


export function Contacts({ data, target, newContact, toggleNew, newInput, toggleState, formSubmit }) {


    const getNewContact = nextContact => {
        if(nextContact){
            return (
            <NewContact 
            target={newInput} 
            toggleState={toggleNew} 
            formSubmit={formSubmit} 
            />
            )
        }
    }
    function renderContacts(contacts) {

        console.log(contacts)
       return (
            contacts.map( (contact, i) => {
                if (contact.edit || data.length === 0) {
            return (
        <div key={i} className={'mt-5'}>
          <Col size={'md-12'}>
                <Button className="fas fa-backspace fa-2x" style={cancelBtn} 
                onClick={toggleState.bind(this, i)} />
            </Col>
            <form onSubmit={formSubmit} >
                <div className={"form-row"}>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Contact for</label>
                        <Input value={contact.contact} name="contact" 
                        placeholder="e.g. 'Dr, Pharmacist, Daughter, etc.."
                        style={input}
                        onChange={target(i)}
                        />
                    </Col>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Office or Business Name</label>
                        <Input value={contact.office} name="office"
                        style={input}
                        onChange={target(i)} 
                        />
                    </Col>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Contact Name</label>
                        <Input value={contact.name} name="name" 
                        placeholder="Dr. Smith"
                        style={input}
                        onChange={target(i)} 
                        />
                    </Col>
                </div>
                <div className="form-row">
                    <Col size={'md-6'} classes={'form-group'}>
                        <label>Address Line 1</label>
                        <Input value={contact.addressOne} name="addressOne"
                        style={input}
                        onChange={target(i)} 
                        />                    </Col>
                    <Col size={'md-6'} classes={'form-group'}>
                        <label>Address Line 2</label>
                        <Input value={contact.addressTwo} name="addressTwo"
                        style={input}
                        onChange={target(i)} 
                        />                    
                    </Col>
                </div>
                <div className="form-row">
                    <Col size={'md-3'} classes={'form-group'}>
                        <label>City</label>
                        <Input value={contact.city} name="city"
                        style={input}
                        onChange={target(i)} 
                        />
                    </Col>
                    <Col size={'md-3'} classes={'form-group'}>
                        <label>State/Providence</label>
                        <Input value={contact.state} name="state"
                        style={input}
                        onChange={target(i)} 
                        />
                    </Col>
                    <Col size={'md-3'} classes={'form-group'}>
                        <label>Zip/Postal Code</label>
                        <Input value={contact.zip} name="zip"
                        style={input}
                        onChange={target(i)} 
                        />
                    </Col>
                    <Col size={'md-3'} classes={'form-group'}>
                        <label>Country</label>
                        <Input value={contact.country} name="country"
                        style={input}
                        onChange={target(i)} 
                        />
                    </Col>
                </div>
                <div className="form-row">
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Primary Phone</label>
                        <Input value={contact.primaryPhone} name="primaryPhone"
                        style={input}
                        onChange={target(i)} 
                        />
                    </Col>
                    <Col size={'md-2'} classes={'form-group'}>
                        <label>Ext.</label>
                        <Input value={contact.primaryExt} name="primaryExt"
                        style={input}
                        onChange={target(i)} 
                        />
                    </Col>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Another Phone</label>
                        <Input value={contact.secondaryPhone} name="secondaryPhone"
                        style={input}
                        onChange={target(i)} 
                        />
                    </Col>
                    <Col size={'md-2'} classes={'form-group'}>
                        <label>Ext.</label>
                        <Input value={contact.secondaryExt} name="secondaryExt"
                        style={input}
                        onChange={target(i)} 
                        />
                    </Col>
                 </div>
                 <div className="form-row">
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Fax</label>
                        <Input value={contact.fax} name="fax"
                        style={input}
                        onChange={target(i)} 
                        />
                    </Col>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Email</label>
                        <Input value={contact.email} name="email"
                        style={input}
                        onChange={target(i)} 
                        />
                    </Col>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Website</label>
                        <Input value={contact.website} name="website"
                        style={input}
                        onChange={target(i)} 
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
            </div> )
    } else {
            return (
            <div key={i} className={'mt-5 contacts-info'}>

                <Col size={'md-12'} classes={'contacts-edit'}>
                    <Button className="fas fa-user-edit fa-2x" style={editBtn} 
                        onClick={toggleState.bind(this, i)} 
                    />   
                </Col>
            <form>
                <div className={"form-row"}>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Contact for:</label>
                        <div style={fieldText}>{contact.contact}</div>
                    </Col>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Office or Business Name:</label>
                        <div style={fieldText}>{contact.office}</div>
                    </Col>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Contact Name:</label>
                        <div style={fieldText}>{contact.name}</div>
                    </Col>
                </div>
                <div className="form-row">
                    <Col size={'md-6'} classes={'form-group'}>
                        <label>Address line 1:</label>
                        <div style={fieldText}>{contact.addressOne}</div>
                    </Col>
                    <Col size={'md-6'} classes={'form-group'}>
                        <label>Address line 2:</label>
                        <div style={fieldText}>{contact.addressTwo}</div>
                    </Col>
                </div>
                <div className="form-row">
                    <Col size={'md-3'} classes={'form-group'}>
                        <label>City:</label>
                        <div style={fieldText}>{contact.city}</div>
                    </Col>
                    <Col size={'md-3'} classes={'form-group'}>
                        <label>State/Providence:</label>
                        <div style={fieldText}>{contact.state}</div>
                    </Col>
                    <Col size={'md-3'} classes={'form-group'}>
                        <label>Zip/Postal Code:</label>
                        <div style={fieldText}>{contact.zip}</div>
                    </Col>
                    <Col size={'md-3'} classes={'form-group'}>
                        <label>Country:</label>
                        <div style={fieldText}>{contact.country}</div>
                    </Col>
                </div>
                <div className="form-row">
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Primary Phone:</label>
                        <div style={fieldText}>{contact.primaryPhone}</div>
                    </Col>
                    <Col size={'md-2'} classes={'form-group'}>
                        <label>Ext:</label>
                        <div style={fieldText}>{contact.primaryExt}</div>
                    </Col>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Another Phone:</label>
                        <div style={fieldText}>{contact.secondaryPhone}</div>
                    </Col>
                    <Col size={'md-2'} classes={'form-group'}>
                        <label>Ext:</label>
                        <div style={fieldText}>{contact.secondaryExt}</div>
                    </Col>
                </div>
                <div className="form-row">
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Fax:</label>
                        <div style={fieldText}>{contact.fax}</div>
                    </Col>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Email:</label>
                        <div style={fieldText}>{contact.email}</div>
                    </Col>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Website:</label>
                        <div style={fieldText}>{contact.website}</div>
                    </Col>
                </div>
            </form>
        </div> )}
        }
       ))
    }

    return (
        <div className={'my-5'}>
            <em><h5>Emergency or other contact Info</h5></em>
         
        {renderContacts(data)}

        {getNewContact(newContact)}
        
        <div className={'add'}>
            <Button className="btn plus" 
            style={newContact ? {display: 'none'} : {display: 'block'}}
            onClick={toggleNew} > 
                <i className="fa fa-plus"></i> 
                    {' '} New Contact 
            </Button>    
        </div>
        </div>
    )
}

const fieldText = {
    fontStyle: 'italic',
    fontWeight: '1000',
    fontSize: '100%',
    padding: '10px',
    paddingLeft: '0',
    color: 'black'
},
input = {
    borderBottom: '1px solid rgba(0, 0, 0, .2)',
    transition: 'all 0.30s ease-in-out'
},
updtBtn = {
    float: 'right',
    margin: '0',
    backgroundColor: '#214c91',
    color: 'white'
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
}

