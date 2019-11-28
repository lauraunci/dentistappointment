const Appointment = require('../models/appointment');

module.exports = {
  index,
  show,
  create, 
  delete: deleteOne,
  update
};

async function index(req, res) {
  const appointments = await Appointment.find({});
  res.status(200).json(appointments);
}

async function show(req, res) {
  const appointment = await Appointment.findById(req.params.id);
  res.status(200).json(appointment);
}

async function create(req, res) {
  console.log(req.body);
  const appointment = new Appointment(req.body);
  try {
    await appointment.save();
    res.json(appointment);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
}

async function deleteOne(req, res) {
  const deletedAppointment = await Appointment.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedAppointment);
}

async function update(req, res) {
  const updatedAppointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedAppointment);
}