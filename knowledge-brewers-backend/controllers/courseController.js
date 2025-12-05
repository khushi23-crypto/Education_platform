const Course = require('../models/Course');
const User = require('../models/User');

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate('instructor', 'name avatar').sort({ createdAt: -1 });
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createCourse = async (req, res) => {
  try {
    if (req.user.role !== 'instructor' && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    const course = new Course({
      ...req.body,
      instructor: req.user._id,
      thumbnail: req.file ? `/uploads/${req.file.filename}` : ''
    });

    await course.save();
    await course.populate('instructor', 'name avatar');
    
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.enrollCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: 'Course not found' });

    if (course.enrollments.includes(req.user._id)) {
      return res.status(400).json({ message: 'Already enrolled' });
    }

    course.enrollments.push(req.user._id);
    req.user.enrolledCourses.push(courseId);
    
    await course.save();
    await req.user.save();

    res.json({ message: 'Enrolled successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
