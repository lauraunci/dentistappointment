import React from 'react';
// import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import './CalendarPage.css';

const CalendarPage = (props) => {
    return (
        <div className="CalendarPage">
            <NavBar />
            <h1>Calendar</h1>
        </div>
    );
}

export default CalendarPage;