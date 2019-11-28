const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    date: {
      type: Date,
      default: Date.now,
      required: true
    },
    time: {
        type: String,
        required: true
        },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
        type: String, 
        required: false, 
        lowercase: true
    },
    phone: {
      type: Number,
      required: true
    },
    insurance: String,
    notes: String
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Appointment', appointmentSchema);