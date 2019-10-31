import React from 'react';
import './Task.css';
import lang from '../../assets/lang/lang.json';
import { FormCheck , FormLabel, Button } from 'react-bootstrap';

class Task extends React.Component {

	render() {
		const formCheckClassNames = [];
		
		if (this.props.isDone) {
			formCheckClassNames.push('task-done');
		} 

		return (
			<FormCheck className={formCheckClassNames}>
				<p>{this.props.creationDate}</p>	
				<input 
					className="form-check-input" 
					type="checkbox" 
					onChange={this.props.taskDone}
					checked={this.props.isDone}
				/>
				<FormLabel>
					{this.props.name}
				</FormLabel>
				<Button variant="danger" onClick={this.props.taskDeleted} disabled={this.props.isDone}> {lang.delete} </Button>
			</FormCheck>
		)
	}
};

export default Task;
