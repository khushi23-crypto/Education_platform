const User = require('../models/User');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .populate('enrolledCourses', 'title instructor thumbnail')
      .select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const updates = req.body;
    const user = await User.findByIdAndUpdate(
      req.user._id, 
      updates, 
      { new: true, runValidators: true }
    ).select('-password');
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getEnrolledCourses = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .populate('enrolledCourses', 'title instructor thumbnail rating');
    res.json(user.enrolledCourses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Admin access required' });
    }
    
    const users = await User.find()
      .select('-password')
      .populate('enrolledCourses', 'title');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
