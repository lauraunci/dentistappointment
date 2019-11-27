import React, { Component } from 'react';
import AppointmentForm from '../../components/AppointmentForm/AppointmentForm';
import './EditAppointmentPage.css';

class EditAppointmentPage extends Component {    
    
    render() {
        return (
            <div className='EditAppointmentPage'>
                <h2>Edit Appointment</h2>
                <hr />
                <AppointmentForm {...this.props} />
            </div>
        );
    }
}

export default EditAppointmentPage;