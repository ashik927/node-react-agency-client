import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import fluoride from '../../../images/icons/service1.png';
import cavity from '../../../images/icons/service2.png';
import whitening from '../../../images/icons/service3.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Web & Mobile Design',
        img: fluoride
    },
    {
        name: 'Graphic Design',
        img: cavity
    },
    {
        name: 'Web Development',
        img: whitening
    }
]

const Services = () => {
    const [service , setService] =useState([]);
    useEffect(()=>{
        fetch('https://cryptic-anchorage-36092.herokuapp.com/homeserviceshow')
        .then(res => res.json())
        .then(result=> setService(result))

    },[])

   
    return (
        <section className="services-container mt-5 pt-5">
            <div className="text-center">
                <h5 style={{color: '#2D2D2D'}}>Provide awesome <span style={{color: '#7AB259'}}>services</span> </h5>
                
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-1">
                {
                    service.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;