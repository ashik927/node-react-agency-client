import React from 'react';
import AllReview from '../AllReview/AllReview';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: "#F4FDFB",
}
const Review = () => {
    return (
        <div>
            <div>
                <section>
                    <div style={containerStyle} className="row">
                        <div className="col-md-2 col-sm-6 col-12">
                            <Sidebar></Sidebar>
                        </div>
                        <div className="col-md-7 col-sm-6 col-12 ml-5">
                            <div className="row mb-5 mt-5">
                                <div className="ml-3">
                                    Order
                            </div>
                                <div className="ml-auto">
                                    Name
                            </div>
                            </div>
                            <AllReview></AllReview>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
};

export default Review;