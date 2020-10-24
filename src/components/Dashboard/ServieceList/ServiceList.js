import React, { useContext, useEffect, useState } from 'react';
import ServiceAllList from '../ServiceAllList/ServiceAllList';
import Sidebar from '../Sidebar/Sidebar';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';
import { UserContext } from '../../../App';
const containerStyle = {
    backgroundColor: "#F4FDFB",
}
const serviceData = [
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Wilson Harry',
        from: 'California',
        img: customer1
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Ema Gomez',
        from: 'California',
        img: customer2
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Aliza Farari',
        from: 'California',
        img: customer3
    }
]
const ServiceList = () => {
    const [order , setOrder]= useState([]);
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    useEffect(()=>{
        fetch('https://cryptic-anchorage-36092.herokuapp.com/readorder?email='+loggedInUser.email)
        .then(res => res.json())
        .then(result=> setOrder(result))

    },[])
    return (
        <section>
            <div style={containerStyle} className="row">
                <div className="col-md-2 col-sm-6 col-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-4 col-sm-6 col-10 ml-5 ">
                    <div className="row mb-5 mt-5">
                        <div className="ml-3">
                            Order
                            </div>
                        <div className="ml-auto">
                            {loggedInUser.name}
                            </div>
                    </div>
                    {
                        order.map(service => <ServiceAllList service={service}></ServiceAllList>)
                    }
                </div>

            </div>
        </section>

    );
};

export default ServiceList;