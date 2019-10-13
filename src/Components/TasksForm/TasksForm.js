import React from 'react';
import './TasksForm.css';
import Task from '../Task/Task';
import lang from '../../assets/lang/lang.json';

class TasksForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			tasks: [],
			inputValue: "",
			isValid: true
		}
		
		this.addTask = this.addTask.bind(this);
		this.addTaskOnEnter = this.addTaskOnEnter.bind(this);
		this.changeInputValue = this.changeInputValue.bind(this);
		this.dispalyTasks = this.dispalyTasks.bind(this);
		this.getFormattedDate = this.getFormattedDate.bind(this);
		this.isInputValid= this.isInputValid.bind(this);
	}

	addTask() {
		if (this.state.isValid) {
			if (this.state.inputValue) {
				this.setState({
					tasks: [ ...this.state.tasks, {name: this.state.inputValue, creationDate: this.getFormattedDate()}],
				});
			}
			this.setState({inputValue: ""});
		}
	}	

	addTaskOnEnter(ev){
		if (ev.key === 'Enter') {
     this.addTask();
    }
	}

	getFormattedDate() {
		let taskCreatedDate = new Date();

		let day = taskCreatedDate.getDate();
		let month = taskCreatedDate.getMonth() + 1;
		let year = taskCreatedDate.getFullYear();
		
		let hour = taskCreatedDate.getHours();
			if (hour < 10) { hour = "0" + hour };
		let minute = taskCreatedDate.getMinutes();
			if (minute < 10) { minute = "0" + minute };
		
		const creationDate = `dodano: ${day}-${month}-${year}, ${hour}:${minute}`
		
		return creationDate;
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
											<Task name={task.name} creationDate={task.creationDate}/> 
										</li>
									)
								})
						}
					</ul>
				</div>
			) 
		}
	}

	isInputValid() {
		if (this.state.inputValue.length > 100) {
			this.setState({isValid: false})
		} else {
			this.setState({isValid: true})
		}
	}

	render() {
		let additionalClassName = this.state.isValid ? "" : " invalid"

		return (
			<>
				<div className="input-group mb-3">
					<input 
						type="text" 
						className={"form-control" + additionalClassName}
						placeholder={lang.inputTask} 
						value={this.state.inputValue} 
						onChange={this.changeInputValue}
						onKeyUp={this.isInputValid}
						onKeyDown={this.addTaskOnEnter}
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
