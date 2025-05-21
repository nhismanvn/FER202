import './App.css';
import {
  Exercise1,
  Exercise2,
  Exercise3,
  Exercise4,
  Exercise5,
  Exercise6,
  Exercise7,
  Exercise8,
  Exercise9,
  Exercise10,
} from './components/Exercises';

function App() {
  return (
    <div className="App">
      <h1>Lab 1: Using JSX and ES6 in React</h1>
      <h2>Exercise 1: Render employee details</h2>
      <Exercise1 />
      <h2>Exercise 2: List of employees</h2>
      <Exercise2 />
      <h2>Exercise 3: Table of employees</h2>
      <Exercise3 />
      <h2>Exercise 4: Average age</h2>
      <Exercise4 />
      <h2>Exercise 5: Dropdown menu</h2>
      <Exercise5 />
      <h2>Exercise 6: IT department employees</h2>
      <Exercise6 />
      <h2>Exercise 7: Sorted employees</h2>
      <Exercise7 />
      <h2>Exercise 8: Group by department</h2>
      <Exercise8 />
      <h2>Exercise 9: Check teenager</h2>
      <Exercise9 />
      <h2>Exercise 10: Search by name</h2>
      <Exercise10 />
    </div>
  );
}

export default App;