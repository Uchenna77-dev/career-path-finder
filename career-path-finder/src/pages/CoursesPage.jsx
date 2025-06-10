// src/pages/CoursesPage.jsx
import React, { useEffect, useState } from 'react';
import { getCourses } from '../services/udemy';
import { useSearchParams } from 'react-router-dom';

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
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Courses on "{query}"</h2>
      {loading ? (
        <p>Loading courses...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <div key={course.id} className="border p-4 rounded shadow">
              <img src={course.image_480x270} alt={course.title} className="mb-2" />
              <h3 className="text-lg font-medium">{course.title}</h3>
              <p className="text-sm">{course.visible_instructors?.[0]?.title}</p>
              <a
                href={`https://www.udemy.com${course.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-2 inline-block"
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
