import React from 'react';
import './TasksForm.css';
import Task from '../Task/Task';

class TasksForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			tasks: [],
			inputValue: "",
			creationDate: ""
		}
		
		this.addTask = this.addTask.bind(this);
		this.addTaskOnEnter = this.addTaskOnEnter.bind(this);
		this.changeInputValue = this.changeInputValue.bind(this);
		this.dispalyTasks = this.dispalyTasks.bind(this);
		this.getFormattedDate = this.getFormattedDate.bind(this);
	}

	addTask() {
		if (this.state.inputValue) {
			this.setState({
				tasks: [ ...this.state.tasks, this.state.inputValue],
			});
		}
		this.setState({inputValue: ""});
		this.getFormattedDate();
	}	

	addTaskOnEnter(ev){
		if (ev.key === 'Enter') {
     this.addTask();
    }
	}

	getFormattedDate() {
		let taskCreatedDate = new Date();

		let day = taskCreatedDate.getDate();
		let month = taskCreatedDate.getMonth()+1;
		let year = taskCreatedDate.getFullYear();
		
		let hour = taskCreatedDate.getHours();
			if (hour < 10) {hour = "0" + hour};
		let minute = taskCreatedDate.getMinutes();
			if (minute < 10) {minute = "0" + minute};
		
		const creationDate = `dodano: ${day}-${month}-${year}, ${hour}:${minute}`

		this.setState({
			creationDate: creationDate,
		});
  }

	changeInputValue(ev) {
		this.setState({inputValue: ev.target.value});
	}
	
	dispalyTasks() {
		if (this.state.tasks.length > 0) {
			return(	
				<div className="card">
					<ul className="list-group list-group-flush">
						{this.state.tasks.map( (task, index) => {
									return (
										<li className="list-group-item" key={index}> 
											<Task name={task} creationDate={this.state.creationDate}/> 
										</li>
									)
								})
						}
					</ul>
				</div>
			) 
		}
	}

	render() {
		return (
			<>
				<div className="input-group mb-3">
					<input 
						type="text" 
						className="form-control" 
						maxLength="100" 
						placeholder="Wprowadź zadanie" 
						value={this.state.inputValue} 
						onChange={this.changeInputValue}
						onKeyUp={this.addTaskOnEnter}
					/>
					<div className="input-group-append">
						<button className="btn btn btn-primary" type="button" onClick={this.addTask}>+</button>
					</div>
				</div>
				{this.dispalyTasks()}
			</>
		)
	}
};

export default TasksForm;
