import React from 'react';
import Carosol from './Carosol/Carosol';
import ClientFeedback from './ClientFeedback/ClientFeedback';
import Contact from './Contact/Contact';
import Header from './Header/Header';
import Service from './Service/Service';
import SponsorInfo from './SponsorInfo/SponsorInfo';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <SponsorInfo></SponsorInfo>
            <Service></Service>
            <Carosol></Carosol>
            <ClientFeedback></ClientFeedback>
            <Contact></Contact>
        </div>
    );
};

export default Home;