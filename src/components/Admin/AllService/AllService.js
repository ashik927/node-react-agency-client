import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import ShowAllService from './ShowAllService';

const containerStyle = {
    backgroundColor: "#F4FDFB",
}
const AllService = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    const[service , setService] = useState([]);
    useEffect(()=>{
        fetch('https://cryptic-anchorage-36092.herokuapp.com/readallservice')
        .then(res => res.json())
        .then(result=> setService(result))

    },[])
    return (
        <div>
            <div>
                <div>
                    <section>
                        <div style={containerStyle} className="row">
                            <div className="col-md-2 col-sm-6 col-12">
                                <Sidebar></Sidebar>
                            </div>
                            <div className="col-md-7 col-sm-6 col-12 ml-5">
                                <div className="row mb-5 mt-5">
                                    <div className="ml-3">
                                        Service List
                            </div>
                                    <div className="ml-auto">
                                        {loggedInUser.name}
                            </div>
                                </div>
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Description</th>
                                        </tr>
                                    </thead>
                                    {
                                    service.map(service =>(<ShowAllService service={service}></ShowAllService>))
                                    }
                                </table>
                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AllService;