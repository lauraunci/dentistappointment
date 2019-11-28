const express = require('express');
const router = express.Router();
const appointmentsCtrl = require('../../controllers/appointments');

/*---------- Public Routes ----------*/
router.get('/', appointmentsCtrl.index);
router.get('/:id', appointmentsCtrl.show);
router.post('/', appointmentsCtrl.create);
router.delete('/:id', appointmentsCtrl.delete);
router.put('/:id', appointmentsCtrl.update);


/*---------- Protected Routes ----------*/


module.exports = router;