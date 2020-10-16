import React from 'react';

const ClientFeedbacks = (props) => {
    const {email,name,description ,img} = props.testimonial;
    console.log(props.testimonial);
    return (
        <div className="card shadow-sm">
             <div className="card-footer d-flex  align-items-center">
                <img className="mx-3" src={img} alt="" width="60"/>
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{email}</p>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-center">{description}</p>
            </div>
           
       </div>
    );
};

export default ClientFeedbacks;