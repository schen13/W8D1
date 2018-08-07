import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import SearchContainer from './search/search_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <h1>Bench Bnb</h1>
    <GreetingContainer />

    <AuthRoute exact path='/signup' component={SignupContainer} />
    <AuthRoute exact path='/login' component={LoginContainer} />
    <Route exact path='/' component={SearchContainer} />
  </div>
);

export default App;
