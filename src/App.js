import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import ServiceList from './components/Dashboard/ServieceList/ServiceList';
import Review from './components/Dashboard/Review/Review';
import AddService from './components/Admin/AddService/AddService';
import Makeadmin from './components/Admin/MakeAdmin/Makeadmin';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AllService from './components/Admin/AllService/AllService';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/servicelist">
            <ServiceList></ServiceList>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/addservice">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/makeadmin">
            <Makeadmin></Makeadmin>
          </PrivateRoute>
          <PrivateRoute path="/allservice">
            <AllService></AllService>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
