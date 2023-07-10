import React from 'react';

const Home = ({ userInfo }) => {
  return (
    <div className="container">
      <h2>Welcome, {userInfo.name}!</h2>
      <p>Username: {userInfo.username}</p>
      <p>Employee ID: {userInfo.employeeId}</p>
      <p>Message: {userInfo.message}</p>
    </div>
  );
};

export default Home;
