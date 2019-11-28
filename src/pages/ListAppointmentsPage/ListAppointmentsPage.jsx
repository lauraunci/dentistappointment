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

    // async handleDeleteAppointment (id) {
    //     const a = await appointmentService.deleteOne(id);
    //     this.setState(state => ({
    //       // Yay, filter returns a NEW array
    //       appointments: state.appointments.filter(a => a._id !== id)
    //     }), () => this.props.history.push('/'));
    // }

    async componentDidMount() {
        const appointments = await appointmentService.getAll();
        console.log(appointments);
        this.setState({appointments});
    }

    render() {
        return (
        <div>
            <h1>Appointments</h1> 
            <Link to='/'>Back to Calendar</Link>
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
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    {this.state.appointments.map((appointment, index) => (
                        <tbody key={index}
                        // handleDeleteAppointment={props.handleDeleteAppointment}
                        >
                            <tr>
                                <td>{appointment.date}</td>
                                <td>{appointment.time}</td>
                                <td>{appointment.firstName}</td>
                                <td>{appointment.lastName}</td>
                                <td>{appointment.email}</td>
                                <td>{appointment.phone}</td>
                                <td>{appointment.insurance}</td>
                                <td>{appointment.notes}</td>
                                <td><Link className='btn btn-xs btn-warning' to={{pathname: '/editappointment'}}>Edit</Link></td>
                                <td><button className='btn btn-xs btn-danger margin-left-10' onClick={() => this.props.handleDeleteAppointment(appointment._id)}>DELETE</button></td>
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