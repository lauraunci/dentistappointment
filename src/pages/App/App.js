import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import CalendarPage from '../../pages/CalendarPage/CalendarPage';
import userService from '../../utils/userService';
import NewAppointmentPage from '../../pages/NewAppointmentPage/NewAppointmentPage';
import appointmentService from '../../utils/appointmentService';
import ListAppointmentsPage from '../../pages/ListAppointmentsPage/ListAppointmentsPage';
import EditAppointmentPage from '../../pages/EditAppointmentPage/EditAppointmentPage';


class App extends Component {
  constructor() {
    super();
    this.state = {
      // ...this.getInitialState(),
      user: userService.getUser(),
      appointments: []
    };
  }

  // getInitialState() {
  //   return {
  //     testState: 'Hello'
  //   };
  // }  

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleAddAppointment= async newAppt => {
    // const newAppt = await appointmentService.create(newApptData);
    this.setState(state => ({
      appointments: [...state.appointments, newAppt]
    }), () => this.props.history.push('/'));
  }

  // handleAddAppointment = async (newAppt) => {
  //   this.setState(state => ({
  //     appointments: [...state.appointments, newAppt]
  //   }), () => this.props.history.push('/'));
  // }

  handleUpdateAppointment = async updatedApptData => {
    const updatedAppointment = await appointmentService.update(updatedApptData);
    const newAppointmentsArray = this.state.appointments.map(a => 
      a._id === updatedAppointment._id ? updatedAppointment : a
    );
    this.setState(
      {appointments: newAppointmentsArray},
      // Using cb to wait for state to update before rerouting
      () => this.props.history.push('/')
    );
  }

  handleDeleteAppointment= async id => {
    await appointmentService.deleteOne(id);
    this.setState(state => ({
      // Yay, filter returns a NEW array
      appointments: state.appointments.filter(a => a._id !== id)
    }), () => this.props.history.push('/'));
  }
  
  // async componentDidMount() {
  //   const appointments = await appointmentService.getAll();
  //   this.setState({appointments});
  // }

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
              handleAddAppointment={this.handleAddAppointment}
              />
            }/>
            <Route exact path='/appointments' render={({apt}) => 
            <ListAppointmentsPage
              apt={apt}
              handleDeletePuppy={this.handleDeletePuppy}
            />
          } />
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
