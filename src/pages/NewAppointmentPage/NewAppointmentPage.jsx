import React, { Component } from 'react';
import AppointmentForm from '../../components/AppointmentForm/AppointmentForm';
import './NewAppointmentPage.css';

class NewAppointmentPage extends Component {    
    
    render() {
        return (
            <div className='NewAppointmentPage'>
                <h2>Make an Appointment</h2>
                <h5>Fill in the form below:</h5>
                <hr />
                <AppointmentForm {...this.props} />
            </div>
        );
    }
}

export default NewAppointmentPage;