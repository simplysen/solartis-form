import React from 'react';
import './App.css';
import { Component } from 'react'
import InsuranceType from './pages/InsuranceType';
import PersonalDetails from './pages/PersonalDetails';
import QuoteDetails from './pages/QuoteDetails';
import FinalData from './pages/FinalData';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    insuranceType: 'default',
    startingDate: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    fullAddress: '',
    streetNo: '',
    streetName: '',
    city: '',
    state: '',
    country: '',
    zip: '',
    plan: 'default',
    propertyCoverage: '',
    buildingType: 'default',
    deductible: 'default',
    liabilityCoverage: 'default',
    age: ''
  }
  updateState = (obj) => {
    this.setState(obj);
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/final-data'><FinalData data={this.state}/></Route>
          <Route path='/quote-details'><QuoteDetails state={this.state} updateState={this.updateState}/></Route>
          <Route path='/personal-details'><PersonalDetails state={this.state} updateState={this.updateState} /></Route>
          <Route path='/'><InsuranceType state={this.state} updateState={this.updateState} /></Route>
        </Switch>
      </BrowserRouter>
    )
  }

}

export default App;