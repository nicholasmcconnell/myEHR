import React from 'react'
import { Container, Row, Col } from '../Grid';
import {Input } from '../Forms';


export function ContactInfo(props) {

if (props.editState) {
    return (
      <Container>
            <form>
                <div className={"form-row"}>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label for="">First Name</label>
                        <Input type="text" name="first_name"/>
                    </Col>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label for="">Last Name</label>
                        <Input type="text" name="last_name"/>
                    </Col>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label for="">Nickname</label>
                        <Input type="text" name="nickname" 
                        placeholder={"e.g. \'Mom\'"} />
                    </Col>
                </div>
                <div className="form-row">
                    <Col size={'md-6'} classes={'form-group'}>
                        <label for="">Address line 1</label>
                        <Input type="text" name="address_one" />
                    </Col>
                    <Col size={'md-6'} classes={'form-group'}>
                        <label for="">Address line 2</label>
                        <Input type="text" name="address_two" />
                    </Col>
                </div>
                <div className="form-row">
                    <Col size={'md-3'} classes={'form-group'}>
                        <label for="">City</label>
                        <Input type="text" name="city" />
                    </Col>
                    <Col size={'md-3'} classes={'form-group'}>
                        <label for="">State/Providence</label>
                        <Input type="text" name="state" />
                    </Col>
                    <Col size={'md-3'} classes={'form-group'}>
                        <label for="">Zip/Postal Code</label>
                        <Input type="text" name="zip" />
                    </Col>
                    <Col size={'md-3'} classes={'form-group'}>
                        <label for="">Country</label>
                        <Input type="text" name="country" />
                    </Col>
                </div>
                    <div className="form-row">
                    <Col size={'md-4'} classes={'form-group'}>
                        <label for="">Phone Number</label>
                        <Input type="text" name="phone" />
                    </Col>
                    </div>
            </form>
        </Container>
    )
    } else {
        return (
            <Container>
            <form>
                <div className={"form-row"}>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label for="">First Name</label>
                        <div style={fieldText}>Anne</div>
                    </Col>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label for="">Last Name</label>
                        <div style={fieldText}>Frank</div>
                    </Col>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label for="">Nickname</label>
                        <div style={fieldText}>Mrs. Quack</div>
                    </Col>
                </div>
                <div className="form-row">
                    <Col size={'md-6'} classes={'form-group'}>
                        <label for="">Address line 1</label>
                        <div style={fieldText}>555 Somewhere</div>
                    </Col>
                    <Col size={'md-6'} classes={'form-group'}>
                        <label for="">Address line 2</label>
                        <div style={fieldText}></div>
                    </Col>
                </div>
                <div className="form-row">
                    <Col size={'md-3'} classes={'form-group'}>
                        <label for="">City</label>
                        <div style={fieldText}>Frankfurt</div>
                    </Col>
                    <Col size={'md-3'} classes={'form-group'}>
                        <label for="">State/Providence</label>
                        <div style={fieldText}>Bergen-Belsen</div>
                    </Col>
                    <Col size={'md-3'} classes={'form-group'}>
                        <label for="">Zip/Postal Code</label>
                        <div style={fieldText}>12345</div>
                    </Col>
                    <Col size={'md-3'} classes={'form-group'}>
                        <label for="">Country</label>
                        <div style={fieldText}>Germany</div>
                    </Col>
                </div>
                    <div className="form-row">
                    <Col size={'md-4'} classes={'form-group'}>
                        <label for="">Phone Number</label>
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
    fontSize: '120%',
    padding: '10px'
}