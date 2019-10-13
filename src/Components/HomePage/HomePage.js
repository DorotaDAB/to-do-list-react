import React from 'react';
import './HomePage.css';
import TasksForm from '../TasksForm/TasksForm';
import lang from '../../assets/lang/lang.json';

function HomePage() {
  return (
    <div className="card">
      <h5 className="card-header">{lang.todoList}</h5>
      <div className="card-body">
        <TasksForm />
      </div>
    </div>
  );
}

export default HomePage;
