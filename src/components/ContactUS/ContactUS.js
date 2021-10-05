import React from 'react';

// Contact us Page 
const ContactUS = () => {
    return (
        <div className="py-5">
            <h1>Contact Us Now</h1>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-7 shadow rounded p-5">
                        <div className="row">
                            <div className="col mb-3 shadow">
                                <label className="from-label">First Name:</label><br />
                                <input type="text" className="from-control" placeholder="First Name" />
                            </div>
                            <div className="col mb-3 shadow">
                                <label className="from-label">Last Name:</label><br />
                                <input type="text" className="from-control" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="mb-3 shadow">
                            <label className="from-label">Email:</label><br />
                            <input type="text" className="from-control" placeholder="name@email.com" />
                        </div>
                        <div className="mb-6 shadow">
                            <label className="from-label">Subject:</label><br />
                            <input type="text" className="from-control" placeholder="Subject" />
                        </div>

                    </div>

                    <div className="col-md-5 text-center">
                        <div className="mb-12 shadow">
                            <label className="from-label">Message:</label><br />
                            <textarea className="from-control p-5 m-5" placeholder="Write your Message" />
                            <button className="btn-info p-3">Submit</button>
                        </div>
                    </div>
                </div>

                <div className="map">

                </div>
            </div>
        </div>
    );
};

export default ContactUS;