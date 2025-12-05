const express = require('express');
const auth = require('../middleware/auth');
const { getProfile, updateProfile, getEnrolledCourses, getAllUsers } = require('../controllers/userController');

const router = express.Router();

// Protected user routes
router.get('/profile', auth, getProfile);
router.put('/profile', auth, updateProfile);
router.get('/enrolled-courses', auth, getEnrolledCourses);

// Admin only
router.get('/', auth, getAllUsers);

module.exports = router;
