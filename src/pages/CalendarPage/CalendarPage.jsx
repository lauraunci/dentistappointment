import React from 'react';
// import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import './CalendarPage.css';

const CalendarPage = (props) => {
    return (
        <div className="CalendarPage">
            <NavBar
            user={props.user} 
            handleLogout={props.handleLogout}
            />
            <h1>Calendar</h1>
            <p>to make an appointment, please create an account or login</p>
        </div>
    );
}

export default CalendarPage;