import React from 'react';
import './TasksForm.css';
import Task from '../Task/Task';

class TasksForm extends React.Component {
	render() {
	return (
		<>
			<div className="input-group mb-3">
				<input type="text" className="form-control" placeholder="Wprowadź zadanie" maxLength="100"/>
				<div className="input-group-append">
					<button className="btn btn btn-primary" type="button" id="button-addon2">+</button>
				</div>
			</div>
			<div className="card">
				<ul className="list-group list-group-flush">
						<li className="list-group-item"> <Task /> </li>
						<li className="list-group-item"> <Task /> </li>
				</ul>
			</div>
    </>
	)}
};

export default TasksForm;
