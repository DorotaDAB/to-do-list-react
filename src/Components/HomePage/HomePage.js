import React from 'react';
import './HomePage.css';
import TasksForm from '../TasksForm/TasksForm';

function HomePage() {
  return (
    <div className="card">
      <h5 className="card-header">Todo List</h5>
      <div className="card-body">
        <TasksForm />
      </div>
    </div>
  );
}

export default HomePage;
