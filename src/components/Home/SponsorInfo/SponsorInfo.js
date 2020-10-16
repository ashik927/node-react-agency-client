import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import netflix from '../../../images/logos/netflix.png';
import uber from '../../../images/logos/uber.png';
import airbnb from '../../../images/logos/airbnb.png';


const SponsorInfo = () => {
    return (
        <div className="container-sm mt-5">
            <div className="row">
                <div className="col-md-2 col-4 col-sm-6 offset-md-1">
                    <img src={slack} alt="" class="img-fluid"  width="100px"/>
                </div>
                <div className="col-md-2 col-4 col-sm-6">
                    <img src={google} alt="" class="img-fluid"  width="100px"/>
                </div>
                <div className="col-md-2 col-4 col-sm-6">
                    <img src={airbnb} alt="" class="img-fluid"  width="100px"/>
                </div>
                <div className="col-md-2 col-4 col-sm-6 ">
                    <img src={netflix} alt="" class="img-fluid"  width="70px"/>
                </div>
                <div className="col-md-2 col-4 col-sm-6">
                    <img src={uber} alt="" class="img-fluid"  width="60px"/>
                </div>
                
            </div>
        </div>
    );
};

export default SponsorInfo;