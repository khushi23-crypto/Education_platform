const express = require('express');
const multer = require('multer');
const auth = require('../middleware/auth');
const { getAllCourses, createCourse, enrollCourse } = require('../controllers/courseController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.get('/', getAllCourses);
router.post('/create', auth, upload.single('thumbnail'), createCourse);
router.post('/:courseId/enroll', auth, enrollCourse);

module.exports = router;
