import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import appointmentService from '../../utils/appointmentService';

class AppointmentForm extends Component {
   constructor(props){
        super(props);
        this.state = {
            date: props.apt.date || '',
            time: props.apt.time || '',
            firstName: props.apt.firstName || '',
            lastName: props.apt.lastName || '',
            email: props.apt.email || '',
            phone: props.apt.phone || '',
            insurance: props.apt.insurance || '',
            notes: props.apt.notes || '',
        };
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await appointmentService.create(this.state);
          this.props.apt.push('/id');
        } catch (err) {
          alert('Invalid Info!');
        }
    }

    isFormInvalid() {
        return !(this.state.date && this.state.time && this.state.firstName && this.state.lastName && this.state.email && this.state.phone && this.state.insurance && this.state.notes);
    }

    render() {
        return (
            <section>
                <form className="form-horizontal" onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <div className="col-sm-12">
                            <label>Date</label>
                            <input type="date" className="form-control" placeholder="Date" value={this.state.date} name="date" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <label>Time</label>
                            <input type="time" className="form-control" placeholder="Time" value={this.state.time} name="time" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <label>First Name</label>
                            <input type="text" className="form-control" placeholder="First Name" value={this.state.firstName} name="firstName" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <label>Last Name</label>
                            <input type="text" className="form-control" placeholder="Last Name" value={this.state.lastName} name="lastName" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <label>Phone</label>
                            <input type="phone" className="form-control" placeholder="Phone" value={this.state.phone} name="phone" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <label>Insurance</label>
                            <select name="insurance" value={this.state.insurance} onChange={this.handleChange}>
                                <option value="none"></option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <label>Notes</label>
                            <input type="text" className="form-control" placeholder="Notes" value={this.state.notes} name="notes" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12 text-center">
                            <button className="btn btn-default" disabled={this.isFormInvalid()}>Submit</button>&nbsp;&nbsp;
                            <Link to='/'>Cancel</Link>
                        </div>
                    </div>
                </form>
            </section>
        )
    }
}

export default AppointmentForm;