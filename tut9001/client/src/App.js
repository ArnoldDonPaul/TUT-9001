import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import LandingPage from './components/LandingPage/LandingPage'
import Boot from './components/Boot/Boot'
import Greeting from './components/Greeting/Greeting'
import InputForm from './pages/InputForm'

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/boot' component={Boot} />
          <Route path='/greeting' component={Greeting} />
          <Route path='/input-form' component={InputForm} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
