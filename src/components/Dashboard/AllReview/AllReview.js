import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';

const AllReview = () => {
    const[review , setReview]= useState({})
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    return (
        <div>
             <form action="https://cryptic-anchorage-36092.herokuapp.com/addreview" method="POST">
                <div className="form-group">
                    <input type="text" name="name"  className="form-control" placeholder="You Name" />
                </div>
                <div className="form-group">
                    <input type="email" name="email" value={loggedInUser.email} className="form-control" placeholder="Company's Name, Designation" />
                </div>
                <div className="form-group">
                    <input type="hidden" name="img" value={loggedInUser.photoUrl} className="form-control" placeholder="Company's Name, Designation" />
                </div>
                <div className="form-group">
                    <textarea name="description"  className="form-control" id="" cols="30" rows="5" placeholder="Description"></textarea>
                </div>
                <div className="form-group ">
                    <button type="submit" class="btn btn-dark navBtn">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AllReview;