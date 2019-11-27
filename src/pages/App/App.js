import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import CalendarPage from '../../pages/CalendarPage/CalendarPage';
import userService from '../../utils/userService';
import NewAppointmentPage from '../../pages/NewAppointmentPage/NewAppointmentPage';
import EditAppointmentPage from '../../pages/EditAppointmentPage/EditAppointmentPage';


class App extends Component {
  constructor() {
    super();
    this.state = {
      ...this.getInitialState(),
      user: userService.getUser()
    };
  }

  getInitialState() {
    return {
      // testState: 'Hello'
    };
  }  

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }
  
  render() {
    return (
      <div>
        <header className='App-header'><h1>Dentist Appointment</h1></header>
        <Switch>
            <Route exact path='/' render={() => 
              <CalendarPage
              handleLogout={this.handleLogout}
              user={this.state.user}
              />
            }/>
            <Route exact path='/signup' render={({ history }) => 
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            }/>
            <Route exact path='/login' render={({ history }) => 
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            }/>
            <Route exact path='/newappointment' render={( apt ) => 
              <NewAppointmentPage
              apt={apt}
              />
            }/>
            <Route exact path='/editappointment' render={( apt ) => 
              <EditAppointmentPage
              apt={apt}
              />
            }/>
        </Switch>
      </div>
    );
  }
}

export default App;
