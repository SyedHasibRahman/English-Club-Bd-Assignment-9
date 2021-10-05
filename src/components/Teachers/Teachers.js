import React from 'react';
import useTeachersData from '../../hooks/useTeachersData';
import "./Teachers.css"
// Get Data for Techer Component
const Teachers = () => {
    const [teachersData] = useTeachersData();
    return (
        <div>
            <h3>Teacher's</h3>
            <div className="container py-5">
                <div className="course row g-5">
                    {
                        teachersData.map(teacher => <Teacher
                            key={teacher.key}
                            teacher={teacher}
                        ></Teacher>)
                    }
                </div>
            </div>
        </div>
    );
};

// display teacher components
const Teacher = (props) => {
    const { name, picture, from } = props.teacher;
    return (
        <div className="col-md-3 col-sm-1 p-3">
            <div className=" rounded h-100 galley">
                <img className="course-img img-fluid teacher-img" src={picture} alt="" />
                <h3>{name}</h3>
                <p>From: {from}</p>
            </div>
        </div>
    );
};

export default Teachers;