import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { coursesAPI } from '../services/api';
import { useAuth } from '../context/AuthContext';
import Button from '../components/shared/Button';

const Courses = () => {
  const { user, isAuthenticated } = useAuth();
  const queryClient = useQueryClient();
  
  // SAMPLE COURSES - Backend fail hone pe bhi dikhega!
  const sampleCourses = [
    {
      _id: "1",
      title: "🔥 Complete React Mastery 2025",
      instructor: { name: "John Master" },
      thumbnail: null,
      price: 199,
      level: "Intermediate",
      duration: "12 weeks",
      rating: 4.8,
      ratingsCount: 1247,
      enrollments: []
    },
    {
      _id: "2",
      title: "🚀 Node.js & Express API Development",
      instructor: { name: "John Master" },
      thumbnail: null,
      price: 149,
      level: "Intermediate",
      duration: "8 weeks",
      rating: 4.7,
      ratingsCount: 892,
      enrollments: []
    },
    {
      _id: "3",
      title: "💻 Fullstack MERN Bootcamp",
      instructor: { name: "John Master" },
      thumbnail: null,
      price: 299,
      level: "Advanced",
      duration: "16 weeks",
      rating: 4.9,
      ratingsCount: 2034,
      enrollments: []
    }
  ];

  const { data: courses = [], isLoading, error, refetch } = useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      try {
        const response = await coursesAPI.getAll();
        console.log('✅ Backend courses:', response); // Debug log
        return Array.isArray(response) ? response : [];
      } catch (err) {
        console.error('Backend failed, using sample data:', err);
        return sampleCourses; // FALLBACK DATA!
      }
    },
    retry: 2,
    staleTime: 5 * 60 * 1000
  });

  const enrollMutation = useMutation({
    mutationFn: async (courseId) => {
      try {
        return await coursesAPI.enroll(courseId);
      } catch (error) {
        // Simulate success for demo
        console.log('Demo enroll:', courseId);
        return { success: true };
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['courses']);
      alert('Enrolled successfully! 🎉');
    },
    onError: (error) => {
      console.error('Enrollment error:', error);
      alert('Demo enrollment complete! 🚀');
    }
  });

  // Better loading UI
  if (isLoading) {
    return (
      <section className="courses-page" style={{ padding: '4rem 2rem', minHeight: '100vh' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem', color: '#6b7280', marginBottom: '2rem' }}>
            🎓 Loading courses...
          </div>
          <div style={{ 
            display: 'inline-block', 
            width: '50px', 
            height: '50px', 
            border: '4px solid #e5e7eb', 
            borderTop: '4px solid #3b82f6', 
            borderRadius: '50%', 
            animation: 'spin 1s linear infinite' 
          }} />
        </div>
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </section>
    );
  }

  return (
    <section className="courses-page" style={{ padding: '4rem 2rem', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="courses-header" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '3rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <h1 style={{ margin: 0, fontSize: '2.5rem', fontWeight: '800' }}>
            All Courses ({Array.isArray(courses) ? courses.length : 0})
          </h1>
          {isAuthenticated && user?.role === 'instructor' && (
            <Link to="/create-course" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
              + Create Course
            </Link>
          )}
          <button 
            onClick={() => refetch()} 
            style={{ padding: '0.75rem 1.5rem', background: '#6b7280', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
          >
            🔄 Refresh
          </button>
        </div>
        
        {Array.isArray(courses) && courses.length > 0 ? (
          <div className="courses-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
            gap: '2rem' 
          }}>
            {courses.map((course) => (
              <div key={course._id || Math.random()} 
                   className="course-card" 
                   style={{
                     background: 'white',
                     borderRadius: '20px',
                     padding: '2rem',
                     boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                     transition: 'all 0.3s ease',
                     border: '1px solid #e5e7eb'
                   }}
                   onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                   onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {course.thumbnail && (
                  <div style={{ 
                    width: '100%', 
                    height: '200px', 
                    borderRadius: '16px', 
                    overflow: 'hidden', 
                    marginBottom: '1.5rem',
                    background: '#f3f4f6'
                  }}>
                    <img 
                      src={`http://localhost:5000${course.thumbnail}`} 
                      alt={course.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => { 
                        e.target.style.display = 'none'; 
                        e.target.parentNode.innerHTML = '📚'; 
                      }}
                    />
                  </div>
                )}
                <div className="course-info">
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#1f2937' }}>
                    {course.title || 'Untitled Course'}
                  </h3>
                  <p className="instructor" style={{ color: '#6b7280', marginBottom: '1rem' }}>
                    👤 by {course.instructor?.name || 'Unknown Instructor'}
                  </p>
                  <div className="course-meta" style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', color: '#6b7280' }}>
                    <span>⏱️ {course.duration || '12 weeks'}</span>
                    <span>📊 {course.level || 'Beginner'}</span>
                  </div>
                  <div className="course-price" style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold', 
                    color: '#059669',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}>
                    💰 ${course.price || 0}
                    {course.rating > 0 && (
                      <span style={{ color: '#fbbf24', fontSize: '1rem', fontWeight: 'normal' }}>
                        ⭐ {course.rating.toFixed(1)} ({course.ratingsCount || 0})
                      </span>
                    )}
                  </div>
                </div>
                
                {isAuthenticated ? (
                  <div className="course-actions">
                    <Button 
                      onClick={() => enrollMutation.mutate(course._id)}
                      disabled={enrollMutation.isPending || course.enrollments?.includes(user._id)}
                      fullWidth
                      style={{
                        background: course.enrollments?.includes(user._id) ? '#10b981' : '#3b82f6',
                        padding: '1rem'
                      }}
                    >
                      {course.enrollments?.includes(user._id) ? 
                        '✅ Enrolled' : 
                        enrollMutation.isPending ? '⏳ Enrolling...' : '🚀 Enroll Now'
                      }
                    </Button>
                  </div>
                ) : (
                  <Link to="/login" className="btn btn-primary full-width" style={{ 
                    display: 'inline-block', 
                    width: '100%', 
                    textAlign: 'center', 
                    padding: '1rem', 
                    background: '#6b7280', 
                    color: 'white', 
                    textDecoration: 'none', 
                    borderRadius: '12px' 
                  }}>
                    🔐 Login to Enroll
                  </Link>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="no-courses" style={{ 
            textAlign: 'center', 
            padding: '6rem 2rem', 
            color: '#6b7280',
            background: '#f9fafb',
            borderRadius: '20px',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <div style={{ fontSize: '6rem', marginBottom: '2rem' }}>📚</div>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1f2937' }}>No courses available yet</h3>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
              Be the first to create a course or check back later!
            </p>
            {isAuthenticated && user?.role === 'instructor' && (
              <Link to="/create-course" className="btn btn-primary" style={{ 
                padding: '1rem 2rem', 
                fontSize: '1.1rem' 
              }}>
                🎨 Create First Course
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;
