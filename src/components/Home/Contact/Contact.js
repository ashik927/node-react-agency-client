import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <section className="contact my-5 py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5  col-12 col-sm-6">
                        <h1><b>Let us handle your <br /> project, professionally </b></h1>
                        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium aliquam dicta fuga, animi nobis.</p>
                    </div>

                    <div className="col-md-6 col-12 col-sm-6 offset-md-1">
                        <form action="">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Email Address *" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Subject *" />
                            </div>
                            <div className="form-group">
                                <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                            </div>
                            <div className="form-group ">
                                <button type="button" class="btn btn-dark navBtn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <p className="text-center mt-5">Copyright Ashik Mahmud {new Date().getFullYear()} </p>

        </section>
    );
};

export default Contact;