import React from 'react';
import './Task.css';

class Task extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			name: this.props.name,
			creationDate: this.props.creationDate,
			isDone: false 
		}
		
		this.toggleDoneStatus = this.toggleDoneStatus.bind(this);
	}

	toggleDoneStatus() {
		this.setState({isDone: !this.state.isDone});
	}

	render() {
		let additionalClassName = this.state.isDone ? "task-done" : ""
		
		return (
			<div className={"form-check " + additionalClassName}>
				<p>{this.state.creationDate}</p>
				<input 
					className="form-check-input" 
					type="checkbox" 
					defaultChecked={this.state.isDone}
					onClick={this.toggleDoneStatus} 
				/>
				<label className="form-check-label" >
					{this.state.name}
				</label>
			</div>
		)
	}
};

export default Task;
