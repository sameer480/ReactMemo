import React from 'react';

const UserCard = React.memo(function UserCard({ name, email }) {
  console.log('UserCard rendered');

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1rem',
      maxWidth: '300px',
      margin: '1rem auto',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
});

export default UserCard;
//Create a functional component UserCard that accepts name and email props and renders them in a styled card. Wrap it with React.memo to prevent re-renders when props don’t change. Test it in an App component with a state update that doesn’t affect UserCard props.