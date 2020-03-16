import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import LandingPage from './components/LandingPage/LandingPage'
import Boot from './components/Boot/Boot'
import Greeting from './components/Greeting/Greeting'
import InputForm from './components/InputForm/InputForm'

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path='/' component={LandingPage} />
        <Route path='/boot' component={Boot} />
        <Route path='/greeting' component={Greeting} />
        <Route path='/input-form' component={InputForm} />
      </BrowserRouter>
    </>
  );
}

export default App;
