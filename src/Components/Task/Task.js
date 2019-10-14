import React from 'react';
import './Task.css';
import { FormCheck , FormLabel } from 'react-bootstrap';

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
		const formCheckClassName = [""];
		if (this.state.isDone) {
			formCheckClassName.push('task-done');
		} else {
			formCheckClassName.push('');
		}
		
		return (
			<FormCheck className={formCheckClassName.join('')}>
				<p>{this.state.creationDate}</p>	
				<input 
					className="form-check-input" 
					type="checkbox" 
					defaultChecked={this.state.isDone}
					onClick={this.toggleDoneStatus} 
				/>
				<FormLabel>
					{this.state.name}
				</FormLabel>
			</FormCheck>
		)
	}
};

export default Task;
