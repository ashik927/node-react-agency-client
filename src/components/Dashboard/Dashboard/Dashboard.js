import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import OrderForm from '../OrderForm/OrderForm';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: "#F4FDFB",
}

const Dashboard = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    return (
        <div>
            <section>
                <div style={containerStyle} className="row">
                    <div className="col-md-2 col-sm-6 col-12">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-7 col-sm-6 col-12 ml-5">
                        <div className="row mb-5 mt-5">
                            <div className="ml-3">
                                Order
                            </div>
                            <div className="ml-auto">
                                {loggedInUser.name}
                            </div>
                        </div>
                        <OrderForm></OrderForm>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Dashboard;