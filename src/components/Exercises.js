import { useState } from 'react';
import { employee, employees } from '../data/employees';

// Exercise 1: Render employee details using object destructuring
export const Exercise1 = () => {
  const { name, age, department } = employee;
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Department: {department}</p>
    </div>
  );
};

// Exercise 2: Display a list of employees using map()
export const Exercise2 = () => {
  return (
    <ul>
      {employees.map((emp, index) => (
        <li key={emp.id || index}>
          {emp.name} - {emp.department}
        </li>
      ))}
    </ul>
  );
};

// Exercise 3: Render a table of employees
export const Exercise3 = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp, index) => (
          <tr key={emp.id || index}>
            <td>{emp.id || index + 1}</td>
            <td>{emp.name}</td>
            <td>{emp.department}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Exercise 4: Calculate average age using rest parameters
export const Exercise4 = () => {
  const averageAge = (...ages) =>
    ages.length ? (ages.reduce((sum, age) => sum + age, 0) / ages.length).toFixed(2) : 0;
  const ages = employees.map(emp => emp.age);
  return <p>Average Age: {averageAge(...ages)}</p>;
};

// Exercise 5: Render a dropdown menu of employee names
export const Exercise5 = () => {
  return (
    <select>
      <option value="">Select an employee</option>
      {employees.map((emp, index) => (
        <option key={emp.id || index} value={emp.name}>
          {emp.name}
        </option>
      ))}
    </select>
  );
};

// Exercise 6: Filter and display IT department employees
export const Exercise6 = () => {
  const itEmployees = employees.filter(emp => emp.department === 'IT');
  return (
    <ul>
      {itEmployees.map((emp, index) => (
        <li key={emp.id || index}>
          {emp.name} - {emp.department}
        </li>
      ))}
    </ul>
  );
};

// Exercise 7: Sort employees by department, then by name
export const Exercise8 = () => {
  const sortedEmployees = [...employees].sort((a, b) =>
    a.department.localeCompare(b.department) || a.name.localeCompare(b.name)
  );
  return (
    <ul>
      {sortedEmployees.map((emp, index) => (
        <li key={emp.id || index}>
          {emp.name} - {emp.department}
        </li>
      ))}
    </ul>
  );
};

// Exercise 8: Group employees by department
export const Exercise7 = () => {
  const groupedEmployees = employees.reduce((acc, emp) => {
    acc[emp.department] = acc[emp.department] || [];
    acc[emp.department].push(emp);
    return acc;
  }, {});

  return (
    <div>
      {Object.keys(groupedEmployees).map(dept => (
        <div key={dept}>
          <h3>{dept}</h3>
          <ul>
            {groupedEmployees[dept].map((emp, index) => (
              <li key={emp.id || index}>{emp.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

// Exercise 9: Check if any employee is a teenager
export const Exercise9 = () => {
  const isTeenager = employees.some(e => e.age >= 10 && e.age <= 20);
  return <p>Has teenager: {isTeenager.toString()}</p>;
};

// Exercise 10: Search for an employee by name
export const Exercise10 = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredEmployees.map((emp, index) => (
          <li key={emp.id || index}>
            {emp.name} - {emp.department}
          </li>
        ))}
      </ul>
    </div>
  );
};