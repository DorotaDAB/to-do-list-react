import React from 'react';
import './HomePage.css';
import Header from '../Header/Header';
import TasksForm from '../TasksForm/TasksForm';

function HomePage() {
  return (
    <div className="home-page--container">
      <Header />
      <TasksForm />
    </div>
  );
}

export default HomePage;
