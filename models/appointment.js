const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    date: Date,
    time: {
        type: Date,
        default: Date.now()
        },
    firstName: String,
    lastName: String,
    email: {
        type: String, 
        required: true, 
        lowercase: true, 
        },
    phone: String,
    insurance: String,
    notes: String
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Appointment', appointmentSchema);