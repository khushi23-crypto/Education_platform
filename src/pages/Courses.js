import React from 'react';

const Courses = () => {
  const courses = [
    {
      title: 'Web Development Bootcamp',
      instructor: 'Shubham Kumar',
      duration: '12 weeks',
      price: '199/-',
      level: 'Beginner'
    },
    {
      title: 'Data Science Mastery',
      instructor: 'Rishabh Bharti',
      duration: '16 weeks',
      price: '299/-',
      level: 'Intermediate'
    },
    {
      title: 'Digital Marketing Pro',
      instructor: 'Aditya kumar',
      duration: '8 weeks',
      price: '149/-',
      level: 'Beginner'
    }
  ];

  return (
    <section className="courses-page">
      <div className="container">
        <h1>All Courses</h1>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <h3>{course.title}</h3>
              <p className="instructor">by {course.instructor}</p>
              <div className="course-meta">
                <span>{course.duration}</span>
                <span className="level">{course.level}</span>
              </div>
              <div className="course-price">{course.price}</div>
              <button className="btn btn-primary">Enroll Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
