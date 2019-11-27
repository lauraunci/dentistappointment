import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import './CalendarPage.css';

const CalendarPage = (props) => {
    let calendar = props.user ?
        <div>
            <NavBar
            user={props.user} 
            handleLogout={props.handleLogout}
            />
            <h1>Calendar</h1>
            <p>Please click to <Link to='/newappointment'>Book Appointment</Link></p>
        </div>
        :
        <div>
            <NavBar
            user={props.user} 
            handleLogout={props.handleLogout}
            />
            <h1>Calendar</h1>
            <p>To make an appointment, please create an account or login</p>
        </div>;

    return (
        <div className="CalendarPage">
            {calendar}
        </div>
    );
}

export default CalendarPage;