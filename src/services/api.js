import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api'
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

API.interceptors.response.use(
  (response) => response.data,  // ✅ AUTO EXTRACT data from {data: [...]}
  (error) => Promise.reject(error.response?.data || error.message)
);

export const authAPI = {
  login: (email, password) => API.post('/auth/login', { email, password }),
  register: (name, email, password) => API.post('/auth/register', { name, email, password })
};

export const coursesAPI = {
  getAll: () => API.get('/courses'),  // ✅ Now returns ARRAY directly
  enroll: (courseId) => API.post(`/courses/${courseId}/enroll`),
  create: (formData) => API.post('/courses/create', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
};

export const usersAPI = {
  profile: () => API.get('/users/profile'),
  updateProfile: (data) => API.put('/users/profile', data),
  enrolledCourses: () => API.get('/users/enrolled-courses')
};

export default API;