import React from 'react'
import './searchPage.css'
import Navbar from '../../components/navbar/Navbar'
import courseData from '../../assets/data/CourseData';
import CourseCard from '../../components/courseCard/CourseCard';

function SearchPage() {

  const sortedCourses = courseData.sort((a, b) => b.Rating - a.Rating);
  return (
    <div>
      <Navbar />
      <h1 className='section results'>9,113 results for “react”</h1>
      <select id="sortSelect">
        <option value="relevant">Most Relevant</option>
        <option value="newest">Newest</option>
        <option value="reviewed">Most Reviewed</option>
        <option value="rated">Highest Rated</option>
      </select>

      <div className='searchPage section flex'>
      {sortedCourses.map((course) => (
        <CourseCard
          key={course.id}
          src={course.src}
          heading={course.heading}
          text={course.text}
          CreatedBy={course.CreatedBy}
          rating={course.Rating}
          hours={course.hours}
          lectures={course.lectures}
          level={course.level}
          Currentprice={course.Currentprice}
          Originalprice={course.Originalprice}
        />
      ))}
    </div>
    </div>
  )
}

export default SearchPage
