import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
const containerStyle = {
    backgroundColor: "#F4FDFB",
    height:"500vh",
}

const Makeadmin = () => {
    return (
        <div>
            <div>
                <section>
                    <div style={containerStyle} className="row h-100">
                        <div className="col-md-2 col-sm-6 col-12">
                            <Sidebar></Sidebar>
                        </div>
                        <div className="col-md-7 col-sm-6 col-12 ml-5">
                            <div className="row col-6 offset-3 mb-5 mt-5">
                                <div className="ml-3">
                                    Service
                            </div>
                                <div className="ml-auto">
                                    Name
                            </div>
                            </div>
                            <form action="http://localhost:5000/addadmin" method="POST" className="offset-2 col-12">
                                <div className="form-group">
                                    <input type="email" name="email" className="form-control" placeholder="Enter Email" />
                                </div>
                                <button type="submit" class="btn btn-dark navBtn d-justify-content-center">Submit</button>
                            </form>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
};

export default Makeadmin;