import React from 'react'
import './CourseDetails.scss';
import { Link, useParams } from 'react-router-dom';

const CourseDetails = ({ courses }) => {
    const { id } = useParams();
    const course = courses.find(course => course.id === parseInt(id));
  
    if (!course) {
      return <div>Course not found.</div>;
    }
  
    return (
        <>
        <h2 className='courseheader'>Course Details</h2>
        <div className="coursepage"> 
            
            {/* <div className='coursepage__left'> */}
             <img className='coursepage__img' src={course.image} alt={course.courseTitle} />
            {/* </div> */}
            <div className='coursepage-right'>
            <h1>{course.courseTitle}</h1>
                <Link to={`/register/`+course.courseTitle+`/`+course.duration} className="course__link"> 
                <button className='register-button'>Register</button>
                </Link>
                <p className='coursepage__para'><strong>Category:</strong> {course.category}</p>
                <p className='coursepage__para'><strong>Duration:</strong> {course.duration}</p>
                <p className='coursepage__para'><strong>Level:</strong> {course.level}</p>
                <p className='coursepage__para'><strong>Instructor:</strong> {course.instructor}</p>
                <p className='coursepage__para'>{course.description}</p> 
                <h3 className='coursepage__outcomes'>Learning Outcomes:</h3>
                <ul className='coursepage__ul'>
                    {course.learningOutcomes.map((outcome, index) => (
                        <li className='coursepage__para' key={index}>{outcome}</li>
                    ))}
            </ul>
            </div>
    </div>
    </>
    );
}

export default CourseDetails