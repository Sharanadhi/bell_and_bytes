import './Courses.scss';
import { courses } from '../../data/courses';

function Courses() {
    console.log(courses)
    return (
        <section className='courses'>
            <h2 className='courses__header'>Courses</h2>
            <div className="courses__container">
                {courses.map((course) => {
                    return (
                        <article className='course' key={course.id}>
                            <img className='course__img' src={course.image} alt="" />
                            <h3 className='course__name'>{course.courseTitle}</h3>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Courses;