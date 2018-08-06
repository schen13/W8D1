import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const welcome = () => (
    <div>
      <h2 className="header-msg">Welcome, {currentUser.username}</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </div>
  );

  const links = () => (
    <div>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Login</Link>
    </div>
  );

  return currentUser ? welcome() : links();
};

export default Greeting;
