import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import HeaderMain from './HeaderMain/HeaderMain';
import './Header.css';

const Header = () => {

    return (
        <div className="bgCurve" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon fill="white" points="0,100 100,0 100,100" />
            </svg>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
        </div>

    );
};

export default Header;