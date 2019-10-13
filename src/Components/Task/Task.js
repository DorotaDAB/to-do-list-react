import React from 'react';
import './Task.css';

class Task extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			name: this.props.name,
			isDone: false 
		}
		
		this.toggleDoneStatus = this.toggleDoneStatus.bind(this);
		this.displayLabel = this.displayLabel.bind(this);
	}

	toggleDoneStatus() {
		this.setState({isDone: !this.state.isDone});
	}

	displayLabel() {
		if (this.state.isDone) {
			return (	
				<label className="form-check-label" style={{color:"#00b300"}}>
					{this.state.name}
				</label>
			)
		} 
		else {
			return (
				<label className="form-check-label">
					{this.state.name}
				</label>
			)
		}
	}

	render() {
		return (
			<div className="form-check">
				<input 
					className="form-check-input" 
					type="checkbox" 
					defaultChecked={this.state.isDone}
					onClick={this.toggleDoneStatus} 
				/>
				{this.displayLabel()}
			</div>
		)}
};

export default Task;
