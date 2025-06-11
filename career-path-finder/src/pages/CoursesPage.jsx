// src/pages/CoursesPage.jsx
import React, { useEffect, useState } from 'react';
import { getCourses } from '../services/udemy';
import { useSearchParams } from 'react-router-dom';
import '../assets/styles/courses.css'; // External stylesheet

function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || 'career';

  useEffect(() => {
    async function fetchCourses() {
      setLoading(true);
      const result = await getCourses(query);
      setCourses(result);
      setLoading(false);
    }
    fetchCourses();
  }, [query]);

  return (
    <div className="courses-page">
      <h2 className="courses-title">Courses on "{query}"</h2>
      {loading ? (
        <p className="loading-text">Loading courses...</p>
      ) : (
        <div className="course-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <img src={course.image_480x270} alt={course.title} className="course-image" />
              <h3 className="course-title">{course.title}</h3>
              <p className="instructor">{course.visible_instructors?.[0]?.title}</p>
              <a
                href={`https://www.udemy.com${course.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="course-link"
              >
                View Course →
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CoursesPage;
