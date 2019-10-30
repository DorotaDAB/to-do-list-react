import React from 'react';
import './Task.css';
import lang from '../../assets/lang/lang.json';
import { FormCheck , FormLabel, Button } from 'react-bootstrap';

class Task extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			name: this.props.name,
			creationDate: this.props.creationDate,
			isDone: this.props.isDone
		}
		
		this.toggleDoneStatus = this.toggleDoneStatus.bind(this);
	}

	toggleDoneStatus() {
		this.setState({isDone: !this.state.isDone});
	}

	render() {
		const formCheckClassNames = [];
		if (this.state.isDone) {
			formCheckClassNames.push('task-done');
		} 
		
		return (
			<FormCheck className={formCheckClassNames}>
				<p>{this.state.creationDate}</p>	
				<input 
					className="form-check-input" 
					type="checkbox" 
					defaultChecked={this.state.isDone}
					onClick={this.toggleDoneStatus}
					onChange={this.props.taskDone}
				/>
				<FormLabel>
					{this.state.name}
				</FormLabel>
				<Button variant="danger" onClick={this.props.taskDeleted} disabled={this.state.isDone}> {lang.delete} </Button>
			</FormCheck>
		)
	}
};

export default Task;
