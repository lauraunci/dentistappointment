import React, { Component } from 'react';
import './ListAppointmentsPage.css';
// import AppointmentForm from '../../components/AppointmentForm/AppointmentForm';
import { Link } from 'react-router-dom';
import appointmentService from '../../utils/appointmentService';
// import ListAppointmentsForm from '../../components/ListAppointmentsForm/ListAppointmentsForm';


class ListAppointmentsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          appointments: []
        };
      }

    async componentDidMount() {
        const appointments = await appointmentService.getAll();
        console.log(appointments);
        this.setState({appointments});
    }

    render() {
        return (
        <div>
            <h1>Appointments</h1> <Link to='/'>Back to Calendar</Link>
            <div>

                <div>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Insurance</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    {this.state.appointments.map((appointment, index) => (
                        <tbody key={index}>
                            <tr>
                                <td>{appointment.date}</td>
                                <td>{appointment.time}</td>
                                <td>{appointment.firstName}</td>
                                <td>{appointment.lastName}</td>
                                <td>{appointment.email}</td>
                                <td>{appointment.phone}</td>
                                <td>{appointment.insurance}</td>
                                <td>{appointment.notes}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
                </div>
            </div>
        </div>
        );
    }
}

export default ListAppointmentsPage;