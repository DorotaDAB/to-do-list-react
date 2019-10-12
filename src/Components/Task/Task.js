import React from 'react';
import './Task.css';

class Task extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			name: this.props.name,
    }
	}

	render() {
		return (
			<div className="form-check">
				<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
				<label className="form-check-label">
					{this.state.name}
				</label>
			</div>
		)}
};

export default Task;
