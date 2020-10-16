import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <navbar className="container  nav-transparent navbar navbar-expand-lg navbar-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse mt-3" id="navbarSupportedContent">
                <img src={logo} class="img-fluid" height="100px" width="100px"></img>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link homeNav mr-3" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-3" to="/login">Our Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-3" to="/dashboard">Our Team</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-3" to="/dashboard">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-3" to="/dashboard">Order</Link>
                    </li>

                    <Link to="/login"> <button type="button" class="btn btn-dark navBtn">Login</button></Link>

                </ul>
            </div>
        </navbar>
    );
};

export default Navbar;