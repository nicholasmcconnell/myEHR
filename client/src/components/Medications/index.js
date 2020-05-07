import React from 'react'
import { Col, Row } from '../Grid';
import { Input, Button } from '../Forms';



export function Medications ({ data, target,  editState, toggleState, formSubmit, renderSuggestions, remove, text, doseChoices, addDoses }) {

    const populateDoses = doses => {
        if(!doses) {
            return
        } else {
         return doses.map( dose => dose === data.dose ? <option name='dosage' selected>{data.dose}</option> : <option name='dosage'>{dose}</option>)
        }
     },

    renderMeds = meds => {
    return meds.map((med, i) => (
        <Col key={i} size={"md-12"} classes={"form-group"}>
        <label style={fieldText}>{med.medication} </label>
        <div>{med.dosage}</div>
        </Col>
    ));
    }

    function renderEditMeds(meds) {
      return (
            meds.map( (med, i) => 
            <Col key={i} size={'md-12'} classes={'form-group'}>
            <label style={fieldText}>
            <Button className="fas fa-times" style={removeBtn}
                onClick={()=>{remove.bind(this, i)}}  
            />
                {med.medication} 
                {' '}
                </label>
            <div>
                {med.dosage}
                </div>
        </Col>
            )
    )}

     

    if ((editState || data.length === 0)) {
        return (
            <div className={'my-5'}>
                <Col size={'md-12'}>
                        <Button className="fas fa-backspace fa-2x" style={cancelBtn} 
                        onClick={toggleState} />
                </Col>
            <form onSubmit={formSubmit} >
                 <div className="form-row" style={{background:'white'}}>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Add New Medication</label>
                        <Button className="fas fa-hand-point-right"
                            style={littlePointBtn}
                            onClick={addDoses}
                            ></Button>
                        <div>
                            <Input name="medication"
                            style={input}
                            value={text}
                            onChange={target} 
                            />
                            {renderSuggestions()}
                        </div>
                    </Col>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Select Dosage</label>
                        <div>
                            <select name="dosage" 
                            onChange={target} style={input}
                            className="form-control">
                                {populateDoses(doseChoices)}
                            </select>
                        </div>
                    </Col>
                        <Col size={'md-2'}>
                        <Button className="btn" style={addBtn}
                         type="submit"  > <i className="fa fa-plus fa-2x mr-2"/> 
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
        } 
    else {
        return (
        <div className={'my-5 med-info'}>
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

littlePointBtn = {
    border: 'none',
    color: 'green',
    float: 'right',
    backgroundColor: 'white'
},
removeBtn = {
    backgroundColor: 'white',
    border: 'none',
    color: 'red'
}
