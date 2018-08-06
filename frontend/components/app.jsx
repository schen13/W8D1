import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <h1>Bench Bnb</h1>
    <GreetingContainer />

    <AuthRoute path='/signup' component={SignupContainer} />
    <AuthRoute path='/login' component={LoginContainer} />
  </div>
);

export default App;
