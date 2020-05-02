import React from 'react'
import { Col } from '../Grid';
import { Input, Button } from '../Forms';

export function Conditions({ data, target, editState, toggleState, formSubmit, renderSuggestions, text }) {

    if (editState) {
        return (
            <div className={'mt-5'}>
                <Col size={'md-12'}>
                        <Button className="fas fa-backspace fa-2x" style={cancelBtn} 
                        onClick={toggleState} />
                </Col>
            <form onSubmit={formSubmit} >
                 <div className="form-row" style={{background:'white'}}>
                    <Col size={'md-6'} classes={'form-group'}>
                        <label>Add New Condition</label>
                        <div>
                            <Input type="text"
                            style={input}
                            value={text}
                            onChange={target} 
                            />
                            {renderSuggestions()}
                        </div>
                    </Col>
                        <Col size={'md-3'}>
                        <Button className="btn" style={addBtn}
                         type="submit" > <i className="fa fa-plus fa-2x mr-2"/> 
                            {' '} Add 
                        </Button>
                    </Col>
                </div>
                <div className={"form-row"}>
                    <Col size={'md-12'} classes={'form-group'}>
                        <label style={fieldText}>Heart Murmer:</label>
                        <div >Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:</div>
                    </Col>
                    <Col size={'md-12'} classes={'form-group'}>
                        <label style={fieldText}>Diabetes:</label>
                        <div> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    </Col>
                    <Col size={'md-12'} classes={'form-group'}>
                        <label style={fieldText}>The Giggles:</label>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    </Col>
                </div>
            </form>
            </div>
        )
        } else {
        return (
        <div className={'mt-5 condition-info'}>
            <Col size={'md-12'} classes={'condition-edit'}>
                <Button className="fas fa-user-edit fa-2x" style={editBtn} 
                    onClick={toggleState} 
                />   
            </Col>
            <form>
                <div className={"form-row"}>
                    <Col size={'md-12'} classes={'form-group'}>
                        <label style={fieldText}>Heart Murmer:</label>
                        <div >Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:</div>
                    </Col>
                    <Col size={'md-12'} classes={'form-group'}>
                        <label style={fieldText}>Diabetes:</label>
                        <div> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    </Col>
                    <Col size={'md-12'} classes={'form-group'}>
                        <label style={fieldText}>The Giggles:</label>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
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
addBtn = {
    marginTop: '30px',
    color: '#214c91',
    size: '10em'
},
input = {
    borderBottom: '1px solid rgba(0, 0, 0, .2)',
    transition: 'all 0.30s ease-in-out'
}