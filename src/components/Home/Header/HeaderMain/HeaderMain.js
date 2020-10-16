import React from 'react';
import { Link } from 'react-router-dom';
import Frame from '../../../../images/logos/Frame.png';

const HeaderMain = () => {
    return (
        <main style={{height:'500px'}} className="row d-flex align-items-center">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h1 style={{color: '#111430'}}>Let’s Grow Your <br/> Brand To The <br/> Next Level</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <button  type="button" class="btn btn-dark navBtn">Hire Us</button>
            </div>
            <div className="col-md-6 col-sm-6 col-12 mb-5 pb-5">
                <img style={{height:'350px'}} src={Frame} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;