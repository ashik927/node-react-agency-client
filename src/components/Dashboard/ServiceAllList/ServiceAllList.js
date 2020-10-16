import React from 'react';

const ServiceAllList = (props) => {
    const {description,name,price} = props.service;

    return (
        <div className="mt-3">
            <div className="card shadow-sm">
                <div className="card-footer d-flex  align-items-center">
                    <img className="mx-3" src={`data:image/png;base64,${props.service.image.img}`} alt="" width="60" />
                    <div>
                        <h6 className="text-primary">{name}</h6>
                        <p className="m-0">{price}</p>
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-text text-center">{description}</p>
                </div>

            </div>
        </div>
    );
};

export default ServiceAllList;