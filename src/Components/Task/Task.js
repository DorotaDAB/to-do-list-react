import React from 'react';
import './Task.css';

class Task extends React.Component {
	render() {
	return (
		<div className="form-check">
			<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
			<label className="form-check-label">
				task
			</label>
		</div>
	)}
};

export default Task;
