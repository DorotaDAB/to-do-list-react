import React from 'react';
import './TasksForm.css';
import Task from '../Task/Task';

class TasksForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
      tasks: ["task1", "task2"],
    }
	}

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
						{this.state.tasks.map( (task, index) => {
									return <li className="list-group-item" key={index}> <Task name={task}/> </li>
								})
						}
					</ul>
				</div>
			</>
		)
	}
};

export default TasksForm;
