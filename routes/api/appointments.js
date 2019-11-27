const express = require('express');
const router = express.Router();
const appointmentsCtrl = require('../../controllers/appointments');

/*---------- Public Routes ----------*/
router.post('/', appointmentsCtrl.create);


/*---------- Protected Routes ----------*/


module.exports = router;