import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import CalendarPage from '../../pages/CalendarPage/CalendarPage';


class App extends Component {
  constructor() {
    super();
    this.state = {...this.getInitialState()};
  }

  getInitialState() {
    return {
      testState: 'Hello'
    };
  }  
  
  render() {
    return (
      <div>
        <header className='App-header'><h1>Dentist Appointment</h1></header>
        <Switch>
            <Route exact path='/' render={() => 
              <CalendarPage
              />
            }/>
            <Route exact path='/signup' render={({ history }) => 
              <SignupPage
                history={history}
              />
            }/>
            <Route exact path='/login' render={() => 
              <LoginPage
              />
            }/>
        </Switch>
      </div>
    );
  }
}

export default App;
