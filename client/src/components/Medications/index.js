import React from 'react';
import { Col } from '../Grid';
import { Input, Button } from '../Forms';

export function Medications({
	data,
	text,
	name,
	target,
	remove,
	addDoses,
	editState,
	formSubmit,
	toggleState,
	otherDosage,
	doseChoices,
	renderSuggestions
}) {
	const renderDoses = (doses) => {
			if (!doses || otherDosage === 'Other Dose') {
				return <Input name="dosage" placeholder="Enter Dosage" style={input} onChange={target} />;
			} else {
				const clone = doses.includes('Other Dose') ? [ ...doses ] : doses.concat('Other Dose');
				return (
					<select name="dosage" style={input} onChange={target} className="form-control">
						<option defaultValue>Which Dose?</option>

						{clone.map((dose, i) => <option key={i}>{dose}</option>)}
					</select>
				);
			}
        },
        
		renderMeds = meds => {
			return meds.sort((a, b) => b.createdAt - a.createdAt).map((med, i) => (
				<Col key={i} size={'md-12'} classes={'form-group'}>
					<label style={fieldText}>{med.medication} </label>
					<div>{med.dosage}</div>
				</Col>
			));
		},

	    renderEditMeds = meds => {
            return meds.sort((a, b) => b.createdAt - a.createdAt).map((med, i) => (
                <Col key={i} size={'md-12'} classes={'form-group'}>
                    <label style={fieldText}>
                        {med.medication}{' '}
                        <Button className="fas fa-times" type="submit" style={removeBtn} onClick={remove.bind(null, i)} />
                    </label>
                    <div>{med.dosage}</div>
                </Col>
            ));
	    }

	if (editState || data.length === 0) {
		return (
			<div className={'my-5'}>
				<em>
					<h5 style={{ textDecoration: 'underline' }}>{name ? `${name}'s` : ''} Medications:</h5>
				</em>

				<Col size={'md-12'} classes="mt-5">
					<Button
						className="fas fa-backspace fa-2x"
						style={{ ...toggleBtn, color: '#d9534f' }}
						onClick={toggleState}
					/>
				</Col>
				<form onSubmit={formSubmit}>
					<div className="form-row" style={{ background: 'white' }}>
						<Col size={'md-4'} classes={'form-group'}>
							<label>Add New Medication</label>
							<Button className="fas fa-hand-point-right" style={littlePointBtn} onClick={addDoses} />
							<div>
								<Input
									name="medication"
									autoComplete="off"
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
							<div>{renderDoses(doseChoices)}</div>
						</Col>
						<Col size={'md-2'}>
							<Button className="btn" style={addBtn} type="submit">
								{' '}
								<i className="fa fa-plus fa-2x mr-2" />  Add
							</Button>
						</Col>
					</div>
				</form>
				<div className={'form-row'}>{renderEditMeds(data)}</div>
			</div>
		);
	} else {
		return (
			<div className={'my-5 med-info'}>
				<em>
					<h5 style={{ textDecoration: 'underline' }}>{name ? `${name}'s` : ''} Medications:</h5>
				</em>

				<Col size={'md-12'} classes={'mt-5'}>
					<Button
						className="fas fa-user-edit fa-2x"
						style={{ ...toggleBtn, color: 'white' }}
						onClick={toggleState}
					/>
				</Col>
				<form>
					<div className={'form-row'}>{renderMeds(data)}</div>
				</form>
			</div>
		);
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
	};
