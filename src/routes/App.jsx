import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../containers/Login'
import Register from '../containers/Register'
import '../styles/components/App.styl';

import Home from '../containers/Home';
import Error from './Error';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
);

export default App;
