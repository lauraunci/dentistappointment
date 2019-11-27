const Appointment = require('../models/appointment');

module.exports = {
  create
};

async function create(req, res) {
  const appointment = new Appointment(req.body);
  try {
    await appointment.save();
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
}