import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import AppointmentForm from '../../components/AppointmentForm/AppointmentForm';
import './EditAppointmentPage.css';

class EditAppointmentPage extends Component {    
    
    render() {
        return (
            <div className='EditAppointmentPage'>
                <h2>Edit Appointment</h2>
                <hr />
                <Link to='/appointments'>Back to Appointments</Link>
            </div>
        );
    }
}

export default EditAppointmentPage;