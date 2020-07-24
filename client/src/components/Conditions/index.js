import React from 'react';
import { Col } from '../Grid';
import { Input, Button, TextArea } from '../Forms';

export function Conditions({
	data,
	name,
	target,
	areaTarget,
	editState,
	toggleState,
	formSubmit,
	renderSuggestions,
	remove,
	text,
	toggleDescState,
	editDescState
}) {
	
	const getRowHeight = (text) => (text.length > 250 ? text.length / 80 : 3),

		renderConditions = conditions => {
			return conditions.sort((a, b) => b.createdAt - a.createdAt).map((condition, i) => 
				(
				<Col key={i} size={'md-12'} classes={'form-group'}>
					<label style={fieldText}>{condition.name} </label>
					<div>{condition.description}</div>
				</Col>
			));
		};

	function renderEditConditions(conditions) {
		return conditions.sort((a, b) => b.createdAt - a.createdAt).map((condition, i) => {
			
			if (condition.edit) {
				return (
					<Col key={i} size={'md-12'} classes={'form-group'}>
						<form>
							<label style={fieldText}>
								{condition.name} {' '}
								<Button
									className="fas fa-pen"
									style={editBtn}
									onClick={toggleDescState.bind(null, i)}
								/>
								<Button
									className="fas fa-sync-alt"
									style={littleEditBtn}
									onClick={toggleDescState.bind(null, i)}
								/>
							</label>

							<TextArea
								value={condition.description}
								rows={getRowHeight(condition.description)}
								onChange={areaTarget(i)}
								style={textarea}
							/>
						</form>
					</Col>
				);
			} else {
				return (
					<Col key={i} size={'md-12'} classes={'form-group'}>
						<label style={fieldText}>
							{condition.name} {' '}
							<Button
								className="fas fa-pen"
								style={editBtn}
								onClick={toggleDescState.bind(null, i)}
							/>
							<Button className="fas fa-times" style={removeBtn} onClick={remove.bind(null, i)} />
						</label>
						<div>{condition.description}</div>
					</Col>
				);
			}
		});
	}

	if ((editState || data.length === 0) && !editDescState) {
		return (
			<div className={'my-5'}>
				<em>
					<h5 style={{ textDecoration: 'underline' }}>
					{name ? `${name}'s` : ''} Health Conditions:</h5>
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
						<Col size={'md-6'} classes={'form-group'}>
							<label>Add New Condition</label>
							<div>
								<Input type="text"  autoComplete="off"
								style={input} 
								value={text} 
								onChange={target} 
								/>
								{renderSuggestions()}
							</div>
						</Col>
						<Col size={'md-3'}>
							<Button className="btn" style={addBtn} type="submit">
								{' '}
								<i className="fa fa-plus fa-2x mr-2" /> Add
							</Button>
						</Col>
					</div>
					<div className={'form-row'}>{renderEditConditions(data)}</div>
				</form>
			</div>
		);
	} else if (editDescState) {
		return (
			<div className={'my-5'}>
				<em>
					<h5 style={{ textDecoration: 'underline' }}>
					{name ? `${name}'s` : ''} Health Conditions:</h5>
				</em>

				<Col size={'md-12 mt-5'}>
					<Button
						className="fas fa-backspace fa-2x"
						style={{ ...toggleBtn, color: '#d9534f' }}
						onClick={toggleState}
					/>
				</Col>
				<form onSubmit={formSubmit}>
					<div className="form-row" style={{ background: 'white' }}>
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
							<Button className="btn" style={addBtn} type="submit">
								{' '}
								<i className="fa fa-plus fa-2x mr-2" /> Add
							</Button>
						</Col>
					</div>
					<div className={'form-row'}>{renderEditConditions(data)}</div>
				</form>
			</div>
		);
	} else {
		return (
			<div className={'mt-5 condition-info'}>
				<em>
					<h5 style={{ textDecoration: 'underline' }}>
					{name ? `${name}'s` : ''} Health Conditions:</h5>
				</em>

				<Col size={'md-12'} classes={'condition-edit mt-5'}>
					<Button className="fas fa-user-edit fa-2x" style={{...toggleBtn, color: "white"}} 
					onClick={toggleState}
					/>
				</Col>
				<form>
					<div className={'form-row'}>{renderConditions(data)}</div>
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
	textarea = {
		resize: 'none',
		borderBottom: '1px solid rgba(0, 0, 0, .2)',
		transition: 'all 0.30s ease-in-out'
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
	editBtn = { 
		border: 'none', 
		backgroundColor: 'white' 
	},
	littleEditBtn = {
		backgroundColor: 'white',
		border: 'none',
		color: '#214c91'
	},
	removeBtn = {
		backgroundColor: 'white',
		border: 'none',
		color: 'red'
	};
