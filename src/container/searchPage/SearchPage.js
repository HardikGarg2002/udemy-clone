import React,{useState} from 'react'
import './searchPage.css'
import Navbar from '../../components/navbar/Navbar'
import courseData from '../../assets/data/CourseData';
import CourseCard from '../../components/courseCard/CourseCard';

function SearchPage() {

  const [selectedOption, setSelectedOption] = useState('relevant');

  const handleSortChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const getSortedCourses = () => {
    switch (selectedOption) {
      case 'newest':
        return courseData.sort((a, b) => b.id - a.id);
      case 'reviewed':
        return courseData.sort((a, b) => b.outof - a.outof);
      case 'rated':
        return courseData.sort((a, b) => b.Rating - a.Rating);
      default:
        return courseData;
    }
  };

  const sortedCourses = getSortedCourses();
  return (
    <div>
      
      <h1 className='section results'>9,113 results for “react”</h1>
      <select id="sortSelect"  value={selectedOption} onChange={handleSortChange}>
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
