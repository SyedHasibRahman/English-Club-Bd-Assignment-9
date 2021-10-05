import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Display Course for Home 
const CoursesForHome = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("./coursesforhome.json")
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    return (
        <div className="container py-5">
            <div className="course row g-5">
                {
                    data.map(course => <CoursesElement
                        key={course.key}
                        course={course}
                    ></CoursesElement>)
                }
                {/* <h1>This is Courses</h1> */}
            </div>
        </div>
    );
};

const CoursesElement = (props) => {
    const { picture, name, price, description } = props.course
    // console.log(name);
    return (

        <div className="col-md-3 col-sm-1 p-3">
            <div className=" rounded border border-info courses">
                <img className="course-img img-fluid p-3" src={picture} alt="" />
                <h5 className="py-3">{name}</h5>
                <Link to="/courses"><button className="btn-info rounded px-5">Price: ${price}</button></Link>
                <p className="p-3">{description}</p>
            </div>
        </div>
        // </div>
    );
};

export default CoursesForHome;