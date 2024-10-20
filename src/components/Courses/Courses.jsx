import './Courses.scss';
import { courses } from '../../data/courses';
import { Link } from 'react-router-dom';

function Courses({ data }) {
    return (
        <section className='courses'>
            <h2 className='courses__header'>Courses</h2>
            <div className="courses__container">
                {data.map((course) => {
                    return (
                        <article className='course' key={course.id}>
                            <Link to={`/course/${course.id}`} className="course__link"> 
                                <img className='course__img' src={course.image} alt={course.courseTitle} />
                                <div className="course__content">
                                    <label className='course__category'>{course.category}</label>
                                    <h3 className='course__name'>{course.courseTitle}</h3>
                                </div>
                            </Link>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Courses;