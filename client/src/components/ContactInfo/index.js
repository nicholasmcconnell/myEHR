import React from 'react'
import { Container, Row, Col } from '../Grid';
import { Input, Button } from '../Forms';


export function ContactInfo(props) {

if (props.editState) {
    return (
      <Container classes={'mt-5'}>
          <Col size={'md-12'}>
                <i className="fas fa-backspace fa-3x" style={cancelBtn} 
                onClick={props.toggleState} />
            </Col>
            <form>
                <div className={"form-row"}>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>First Name</label>
                        <Input value="Anne" name="first_name"/>
                    </Col>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Last Name</label>
                        <Input value="Frank" name="last_name"/>
                    </Col>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Nickname</label>
                        <Input value="Mrs. Quack" name="nickname" 
                        placeholder={"e.g. \'Mom\'"} />
                    </Col>
                </div>
                <div className="form-row">
                    <Col size={'md-6'} classes={'form-group'}>
                        <label>Address Line 1</label>
                        <Input value="555 Somewhere" name="address_one" />
                    </Col>
                    <Col size={'md-6'} classes={'form-group'}>
                        <label>Address Line 2</label>
                        <Input value="Apt-7" name="address_two" />
                    </Col>
                </div>
                <div className="form-row">
                    <Col size={'md-3'} classes={'form-group'}>
                        <label>City</label>
                        <Input value="Frankfurt" name="city" />
                    </Col>
                    <Col size={'md-3'} classes={'form-group'}>
                        <label>State/Providence</label>
                        <Input value="Bergen-Belsen" name="state" />
                    </Col>
                    <Col size={'md-3'} classes={'form-group'}>
                        <label>Zip/Postal Code</label>
                        <Input value="12345" name="zip" />
                    </Col>
                    <Col size={'md-3'} classes={'form-group'}>
                        <label>Country</label>
                        <Input value="Germany" name="country" />
                    </Col>
                </div>
                    <div className="form-row">
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Phone Number</label>
                        <Input value="(264)224-1234" name="phone" />
                    </Col>
                <Col size={'md-12'}>
                <Button className="btn btn-success" style={updtBtn} 
                    onClick={props.toggleState} >
                        <i class="fas fa-sync-alt fa-2x"/> {' '}  
                        update 
                    </Button>
                </Col>
                    </div>
            </form>
        </Container>
    )
    } else {
        return (
            <Container classes={'mt-5'}>
                <Col size={'md-12'}>
                <i className="fa fa-user-edit fa-3x" style={editBtn} 
                    onClick={props.toggleState} />
                </Col>
            <form>
                <div className={"form-row"}>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>First Name:</label>
                        <div style={fieldText}>Anne</div>
                    </Col>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Last Name:</label>
                        <div style={fieldText}>Frank</div>
                    </Col>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Nickname:</label>
                        <div style={fieldText}>Mrs. Quack</div>
                    </Col>
                </div>
                <div className="form-row">
                    <Col size={'md-6'} classes={'form-group'}>
                        <label>Address line 1:</label>
                        <div style={fieldText}>555 Somewhere</div>
                    </Col>
                    <Col size={'md-6'} classes={'form-group'}>
                        <label>Address line 2:</label>
                        <div style={fieldText}></div>
                    </Col>
                </div>
                <div className="form-row">
                    <Col size={'md-3'} classes={'form-group'}>
                        <label>City:</label>
                        <div style={fieldText}>Frankfurt:</div>
                    </Col>
                    <Col size={'md-3'} classes={'form-group'}>
                        <label>State/Providence:</label>
                        <div style={fieldText}>Bergen-Belsen</div>
                    </Col>
                    <Col size={'md-3'} classes={'form-group'}>
                        <label>Zip/Postal Code:</label>
                        <div style={fieldText}>12345</div>
                    </Col>
                    <Col size={'md-3'} classes={'form-group'}>
                        <label>Country:</label>
                        <div style={fieldText}>Germany</div>
                    </Col>
                </div>
                    <div className="form-row">
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Phone Number:</label>
                        <div style={fieldText}>(264)224-1234</div>
                    </Col>
                    </div>
            </form>
        </Container>
        )
    }
}

const fieldText = {
    fontStyle: 'italic',
    fontWeight: '1000',
    fontSize: '100%',
    padding: '10px',
    paddingLeft: '0'
},
editBtn = {
    float: 'right',
    marginBottom: '0',
    color: 'green'
},
cancelBtn = {
    float: 'right',
    marginBottom: '0',
    color: 'tomato'
},
updtBtn = {
    float: 'right',
    marginBottom: '0',
    backgroundColor: '#214c91'
}