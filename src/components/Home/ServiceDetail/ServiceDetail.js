import React from 'react';
import './ServiceDetail.css'
import {useSpring, animated} from 'react-spring'

const ServiceDetail = ({ service }) => {
    const props = useSpring({opacity: 1, from: {opacity: 0}})

    return (
        <div className="col-md-4 text-center serviceStyle">
            <img style={{height: '50px'}} src={`data:image/png;base64,${service.image.img}`} alt="" />
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p className="text-secondary">{service.description}</p>
        </div>
    );
};

export default ServiceDetail;