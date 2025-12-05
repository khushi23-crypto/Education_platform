import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { coursesAPI } from '../services/api';
import { useAuth } from '../context/AuthContext';
import Button from '../components/shared/Button';

const Courses = () => {
  const { user, isAuthenticated } = useAuth();
  const queryClient = useQueryClient();
  
  const { data: courses = [], isLoading, error } = useQuery({
    queryKey: ['courses'],
    queryFn: coursesAPI.getAll,
    retry: 1,
    staleTime: 5 * 60 * 1000  // 5 minutes
  });

  const enrollMutation = useMutation({
    mutationFn: coursesAPI.enroll,
    onSuccess: () => {
      queryClient.invalidateQueries(['courses']);
      alert('Enrolled successfully! 🎉');
    },
    onError: (error) => {
      console.error('Enrollment error:', error);
      alert('Enrollment failed: ' + (error.message || 'Try again'));
    }
  });

  if (isLoading) {
    return (
      <section className="courses-page">
        <div className="container">
          <div className="loading-spinner">Loading courses...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="courses-page">
        <div className="container">
          <div className="error">
            ❌ Error loading courses: {error.message || 'Unknown error'}
            <button onClick={() => queryClient.invalidateQueries(['courses'])} className="btn btn-primary">
              Retry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="courses-page">
      <div className="container">
        <div className="courses-header">
          <h1>All Courses ({Array.isArray(courses) ? courses.length : 0})</h1>
          {isAuthenticated && user?.role === 'instructor' && (
            <Link to="/create-course" className="btn btn-primary">+ Create Course</Link>
          )}
        </div>
        
        {Array.isArray(courses) && courses.length > 0 ? (
          <div className="courses-grid">
            {courses.map((course) => (
              <div key={course._id || Math.random()} className="course-card">
                {course.thumbnail && (
                  <img 
                    src={`http://localhost:5000${course.thumbnail}`} 
                    alt={course.title} 
                    className="course-thumbnail"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                )}
                <div className="course-info">
                  <h3>{course.title || 'Untitled Course'}</h3>
                  <p className="instructor">
                    👤 by {course.instructor?.name || 'Unknown Instructor'}
                  </p>
                  <div className="course-meta">
                    <span>⏱️ {course.duration || '12 weeks'}</span>
                    <span className="level">📊 {course.level || 'Beginner'}</span>
                  </div>
                  <div className="course-price">
                    💰 ${course.price || 0}
                    {course.rating > 0 && (
                      <span className="rating">⭐ {course.rating.toFixed(1)} ({course.ratingsCount || 0})</span>
                    )}
                  </div>
                </div>
                
                {isAuthenticated ? (
                  <div className="course-actions">
                    <Button 
                      onClick={() => enrollMutation.mutate(course._id)}
                      disabled={enrollMutation.isPending || course.enrollments?.includes(user._id)}
                      fullWidth
                    >
                      {course.enrollments?.includes(user._id) ? 
                        '✅ Enrolled' : 
                        enrollMutation.isPending ? 'Enrolling...' : 'Enroll Now'
                      }
                    </Button>
                  </div>
                ) : (
                  <Link to="/login" className="btn btn-primary full-width">
                    🔐 Login to Enroll
                  </Link>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="no-courses">
            <div className="empty-icon">📚</div>
            <h3>No courses available yet</h3>
            <p>Be the first to create a course or check back later!</p>
            {isAuthenticated && user?.role === 'instructor' && (
              <Link to="/create-course" className="btn btn-primary">Create First Course</Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;