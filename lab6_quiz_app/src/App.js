import React from 'react';
import AddQuestionForm from './components/AddQuestionForm';
import Quiz from './components/Quiz';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>Redux Quiz App</h1>
      <AddQuestionForm />
      <Quiz />
    </div>
  );
}

export default App;
