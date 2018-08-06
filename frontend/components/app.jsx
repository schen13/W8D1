import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <h1>Bench Bnb</h1>
    <GreetingContainer />

    <Route path='/signup' component={SignupContainer} />
    <Route path='/login' component={LoginContainer} />
  </div>
);

export default App;
