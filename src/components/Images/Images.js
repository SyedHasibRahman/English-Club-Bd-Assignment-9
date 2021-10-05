import React from 'react';
import "./Images.css"

// Images for gallery 
const Images = (props) => {
    const { picture } = props.course;
    return (
        <div className="col-md-4 col-sm-1 p-3">
            <div className=" rounded">
                <img className="course-img img-fluid galley" src={picture} alt="" />
            </div>
        </div>
    );
};

export default Images;