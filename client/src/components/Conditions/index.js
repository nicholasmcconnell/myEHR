import React, { useState } from 'react'
import { Col } from '../Grid';
import { Input, Button, TextArea } from '../Forms';



export function Conditions({ data, target, editState, toggleState, formSubmit, renderSuggestions, text, toggleDescState, editDescState }) {

    const renderConditions = conditions => {
      return (
          conditions.map( (condition, i) => 
            <Col key={i} size={'md-12'} classes={'form-group'}>
                <label style={fieldText}>
                    {condition.name} 
                    {' '}
                    </label>
                <div>
                    {condition.description}
                    </div>
            </Col>
         )
        )
     };

    
    function renderEditConditions(conditions) {
      return (
          conditions.map( (condition, i) => {
            if (condition.edit) {

              return (
            <Col key={i} size={'md-12'} classes={'form-group'}>
                <label style={fieldText}>
                    {condition.name} {' '}
                    <Button className="fas fa-pen" style={{border:'none'}}
                        onClick={toggleDescState.bind(this, i)} 
                        />
                    <Button className="fas fa-times" style={removeBtn}
                        onClick={toggleState}  
                        />
                    <Button className="fas fa-sync-alt" style={littleEditBtn}
                        onClick={toggleState}  
                        />
                </label>
                <form>
                    <TextArea value={condition.description} name="desc"
                    rows={getRowHeight(condition.description)}
                    style={textarea} 
                    />
                </form>
            </Col> 
              )
            }   else {
                return (
        
            <Col key={i} size={'md-12'} classes={'form-group'}>
                <label style={fieldText}>
                    {condition.name} {' '}
                    <Button className="fas fa-pen" style={{border:'none'}}
                        onClick={toggleDescState.bind(this, i)}
                        />
                    <Button className="fas fa-times" style={removeBtn}
                        onClick={toggleState}  
                        />
                    </label>
                <div>
                    {condition.description}
                    </div>
            </Col>
                )
                }
            }))
         
        
     }
     
     const getRowHeight = text =>  text.length > 250 ? text.length/80 : 3;

    if ((editState || data.length === 0) && !editDescState) {
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

                    {renderEditConditions(data)}
                    
                </div>
            </form>
            </div>
        )
        } else if (editDescState) {
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
                   
                {renderEditConditions(data)}

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
                   
                {renderConditions(data)}

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

textarea = {

    resize: 'none',

    
    borderBottom: '1px solid rgba(0, 0, 0, .2)',
    transition: 'all 0.30s ease-in-out'
},

input = {
    borderBottom: '1px solid rgba(0, 0, 0, .2)',
    transition: 'all 0.30s ease-in-out'
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
    focus: 'none',
    size: '10em'
},
littleEditBtn = {
    border: 'none',
    color: '#214c91'
},
removeBtn = {
    border: 'none',
    color: 'red'
}
