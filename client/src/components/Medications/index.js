import React from 'react'
import { Col } from '../Grid';
import { Input, Button } from '../Forms';



export function Medications ({ data, target,  editState, toggleState, formSubmit, renderSuggestions, remove, text, doseChoices, addDoses, otherDosage }) {

    const renderDoses = doses => {
        if(!doses || otherDosage === 'Other Dose') {
            return (
                <Input name="dosage" placeholder="Enter Dosage"
                style={input}
                onChange={target}
                />
            )
        } else {
          const clone = doses.includes('Other Dose') ? doses : doses.concat('Other Dose'); 
         return (
                <select name="dosage" style={input}
                onChange={target} 
                className="form-control">
                    <option selected>Which Dose?</option>

                    {clone.map( dose => <option>{dose}</option>)}

                </select>    
            )
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
                
                    {med.medication} 
                    {' '}
                    <Button className="fas fa-times" type='submit' style={removeBtn}
                    onClick={remove.bind(this, i)}  
                  />
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
                <em><h5 style={{textDecoration: "underline"}}>Medications:</h5></em>
                
                <Col size={'md-12'} classes="mt-5">
                    <Button className="fas fa-backspace fa-2x" 
                    style={{...toggleBtn, color: "tomato"}} 
                    onClick={toggleState} 
                    />
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
                            <Input name="medication" autoComplete="off"
                            style={input}
                            value={text}
                            onBlur={addDoses}
                            onChange={target}
                            />

                            {renderSuggestions()}

                        </div>
                    </Col>
                    <Col size={'md-4'} classes={'form-group'}>
                        <label>Select Dosage</label>
                        <div>

                           {renderDoses(doseChoices)}

                        </div>
                    </Col>
                        <Col size={'md-2'}>
                        <Button className="btn" style={addBtn}
                         type="submit"  > <i className="fa fa-plus fa-2x mr-2"/> 
                            {' '} Add 
                        </Button>
                    </Col>
                </div>
            </form>
                <div className={"form-row"}>

                    {renderEditMeds(data)}
                    
                </div>
            </div>
        )
        } 
    else {
        return (
        <div className={'my-5 med-info'}>
        <em><h5 style={{textDecoration: "underline"}}>Medications:</h5></em>

            <Col size={'md-12'} classes={"mt-5"}>
                <Button className="fas fa-user-edit fa-2x" 
                    style={toggleBtn} 
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
    padding: '10px 10px 10px 0',
    color: 'black'
},
input = {
    borderBottom: '1px solid rgba(0, 0, 0, .2)',
    transition: 'all 0.30s ease-in-out'
},
toggleBtn = {
    float: 'right',
    border: 'none',
    margin: '0',
    color: 'white',
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
