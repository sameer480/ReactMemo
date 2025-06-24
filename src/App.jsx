import React, { useState } from 'react';
import UserCard from './UserCard';
import EmployeeCard from './EmployeeCard';
  const [id, setId] = useState(1);

  // 👇 Name and role remain constant
  const employee = {
    id: id,
    name: 'Jane Doe',
    role: 'Software Engineer'
  };

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>React.memo Demo</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment Count ({count})
      </button>

      <UserCard name="Alice" email="alice@example.com" />
      <h2>Employee Info</h2>
      <button onClick={() => setId(id + 1)}>
        Change ID (Current: {id})
      </button>

      <EmployeeCard employee={employee} />
    </div>
  );
}

export default App;
