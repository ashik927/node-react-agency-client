import React from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
    "mdbreact";
    import carousel1 from '../../../images/carousel-1.png';
    import carousel2 from '../../../images/carousel-2.png';
    import carousel3 from '../../../images/carousel-3.png';
    import carousel4 from '../../../images/carousel-4.png';
    import carousel5 from '../../../images/carousel-5.png';
    import {Carousel} from '3d-react-carousal';
import { useLocation } from 'react-router-dom';

    let slides = [
        <img  src={carousel1} height="300vh"
        width="100%" alt="1" />,
        <img  src={carousel2} height="300vh"
        width="100%"alt="2" />  ,
        <img  src={carousel3} height="300vh"
        width="100%"alt="3" />  ,
        <img  src={carousel4} height="300vh"
        width="100%"alt="4" />  ,
        <img src={carousel5} height="300vh"
        width="100%"alt="5" />   ];

const Carosol = () => {
    
    return (
       <div style={{ backgroundColor:"#111430", height:"500px" }} class="mt-5  pt-5">
           <h1 className="text-center" style={{color: "white"}}>Here are some of  <span style={{color: '#7AB259'}}>our works</span> </h1>
           <br/> <br/>
           <Carousel slides={slides} autoplay={true} interval={4000} class="mt-5 pt-5"/>

        {/* <MDBContainer className="mt-3  pt-3">
            <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
            >
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                height="500vh"
                                width="100%"
                                src={carousel1}
                            />
                            <MDBMask overlay="black-light" />
                        </MDBView>
                        
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src={carousel2}
                                height="500vh"
                                width="100%"
                                alt="Second slide"
                            />
                            <MDBMask overlay="black-strong" />
                        </MDBView>
                       
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src={carousel3}
                                height="500vh"
                                width="100%"
                                alt="Third slide"
                            />
                            <MDBMask overlay="black-slight" />
                        </MDBView>
                       
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="4">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src={carousel4}
                                height="500vh"
                                width="100%"
                                alt="Third slide"
                            />
                            <MDBMask overlay="black-slight" />
                        </MDBView>
                       
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer> */}
        </div>
    );
};

export default Carosol;