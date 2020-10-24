import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import AllReview from '../AllReview/AllReview';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: "#F4FDFB",
}
const Review = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

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
                                    review
                            </div>
                                <div className="ml-auto">
                                    {loggedInUser.name}
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