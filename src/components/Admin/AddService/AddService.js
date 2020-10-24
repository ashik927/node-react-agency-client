import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import AddAdminService from './AddAdminService';
const containerStyle = {
    backgroundColor: "#F4FDFB",
}
const AddService = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    return (
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
                               Add Service
                            </div>
                            <div className="ml-auto">
                                {loggedInUser.name}
                            </div>
                        </div>
                        <AddAdminService></AddAdminService>
                    </div>

                </div>
            </section>
        </div>
        </div>
    );
};

export default AddService;