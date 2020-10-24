import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faSignOutAlt, faLock, faEnvelope, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setAdmin] = useState(false);
    const location = useLocation();
    useEffect(() => {
        fetch('https://cryptic-anchorage-36092.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setAdmin(data));
    }, [])
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
           <div className="mb-5">
          <Link to="/"> <img src={logo} class="img-fluid" height="100px" width="100px"></img></Link>
           </div>
           {isAdmin  ?<div>
                <li>
                    <Link to="/allservice" className="text-dark">
                        <FontAwesomeIcon icon={faEnvelope} /> <span>All Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addservice" className="text-dark">
                        <FontAwesomeIcon icon={faEnvelope} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/makeadmin" className="text-dark">
                        <FontAwesomeIcon icon={faEnvelope} /> <span>Make Admin</span>
                    </Link>
                </li>
            </div>
            :
            <div>
                <li>
                    <Link to="/dashboard" className="text-dark">
                        <FontAwesomeIcon icon={faCartPlus} /> <span> Order</span>
                    </Link>
                </li>
                <li>
                    <Link to="/servicelist" className="text-dark">
                        <FontAwesomeIcon icon={faLock} /> <span>Service List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-dark">
                        <FontAwesomeIcon icon={faEnvelope} /> <span>Review</span>
                    </Link>
                </li>
                </div>}
            </ul>
            <div>
                <Link to="/" className="text-black"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;