import useData from '../../hooks/useData';
import Course from '../Course/Course';

// Display Course Components
const Courses = () => {
    const [data] = useData();
    return (
        <div className="container py-4">

            <h2  className="py-4">Get your Best Course now</h2>
            <div className="course row g-4">
                {
                    data.map(course => <Course
                        key={course.key}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;