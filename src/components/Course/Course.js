import React from 'react';
import { Link } from 'react-router-dom';
import "./Course.css"

// Display Course Components part
const Course = (props) => {
    const { picture, name, price, description } = props.course
    return (

        <div className="col-md-4 col-sm-1 p-3 ">
            <div className=" rounded border border-info h-100 courses">
                <img className="course-img img-fluid course" src={picture} alt="" />
                <h5 className="p-3">{name}</h5>
                <Link to="/courses"><button className="btn-info rounded px-5">Price: ${price}</button></Link>
                <p className="p-3">{description}</p>
            </div>
        </div>
    );
};

export default Course;