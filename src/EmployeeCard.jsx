import React from 'react';

function EmployeeCard({ employee }) {
  console.log('EmployeeCard rendered');

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '1rem',
      borderRadius: '8px',
      margin: '1rem auto',
      maxWidth: '300px'
    }}>
      <h3>{employee.name}</h3>
      <p>Role: {employee.role}</p>
      <small>ID: {employee.id}</small>
    </div>
  );
}

// 👇 Only re-render if name or role changed (not id)
function areEqual(prevProps, nextProps) {
  return (
    prevProps.employee.name === nextProps.employee.name &&
    prevProps.employee.role === nextProps.employee.role
  );
}

export default React.memo(EmployeeCard, areEqual);
