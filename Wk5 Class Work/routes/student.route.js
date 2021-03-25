const express = require('express');
const router = express.Router();

const student_controller = require('../controllers/student.controller');

router.get('/test', student_controller.test);

// http://localhost:3000/students/create
router.post('/create', student_controller.student_create);

// http://localhost:3000/:id
router.get('/:id', student_controller.student_detail);

// http://localhost:3000/:id/update
router.put('/:id/update', student_controller.student_update);

// http://localhost:3000/:id/delete
router.delete('/:id/delete', student_controller.student_delete);

module.exports = router;