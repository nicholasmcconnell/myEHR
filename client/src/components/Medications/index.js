import React from 'react'
import { Col } from '../Grid';
import { Input, Button, TextArea } from '../Forms';



export function Medications ({ data, target, areaTarget, editState, toggleState, formSubmit, renderSuggestions, remove, text, toggleDescState, editDescState }) {

    const renderMeds  = meds => {
      return (
          meds.map( (med, i) => 
            <Col key={i} size={'md-12'} classes={'form-group'}>
                <label style={fieldText}>
                    {med.name} 
                    {' '}
                    </label>
                <div>
                    {med.description}
                    </div>
            </Col>
         )
        )
     };

    
    function renderEditMeds(meds) {
      return (
          meds.map( (med , i) => {
            if (med.edit) {

              return (
            <Col key={i} size={'md-12'} classes={'form-group'}>
              <form>
                <label style={fieldText}>
                    {med.name} {' '}
                    <Button className="fas fa-pen" style={{border:'none'}}
                        onClick={toggleDescState.bind(this, i)} 
                        />
                    <Button className="fas fa-sync-alt" style={littleEditBtn}
                        onClick={toggleDescState.bind(this, i)} 
                        />
                </label>
                
                    <TextArea 
                        value={med.description} 
                        rows={getRowHeight(med.description)}
                        onChange={areaTarget(i)}
                        style={textarea} 
                     />
              </form>
            </Col> 
              )
            }   else {
                return (
                <Col key={i} size={'md-12'} classes={'form-group'}>
                    <label style={fieldText}>
                        {med.name} {' '}
                        <Button className="fas fa-pen" style={{border:'none'}}
                            onClick={toggleDescState.bind(this, i)}
                            />
                        <Button className="fas fa-times" style={removeBtn}
                            onClick={remove.bind(this, i)}  
                            />
                        </label>
                    <div>
                        {med.description}
                        </div>
                 </Col>
                )
            }
        })
    )   
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
                        <label>Add New Medication</label>
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

                    {renderEditMeds(data)}
                    
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
                        <label>Add New Medication</label>
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
                   
                {renderEditMeds(data)}

                </div>
            </form>
        </div>
        )
    } else {
        return (
        <div className={'mt-5 med-info'}>
            <Col size={'md-12'} classes={'med-edit'}>
                <Button className="fas fa-user-edit fa-2x" style={editBtn} 
                    onClick={toggleState} 
                />   
            </Col>
            <form>
                <div className={"form-row"}>
                   
                {renderMeds(data)}

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
