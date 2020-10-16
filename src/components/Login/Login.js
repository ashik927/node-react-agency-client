import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import logo from '../../images/logos/logo.png'
import google from '../../images/google.png'

import './Login.css'
import { UserContext } from '../../App';
firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const [newUser , setNewUser] = useState(false);
  const[user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password:'',
    error:'',
    success:false,
    photoUrl:''
  });
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleClick=()=>{
    firebase.auth().signInWithPopup(provider)
    .then(res=>{
       const{displayName, email, photoURL}= res.user;
       const signedInUser ={
        isSignedIn: true,
        name: displayName,
        email:email ,
        photoUrl:photoURL
       }
       setUser(signedInUser);
       setLoggedInUser(signedInUser);
       history.replace(from);
       
    })
 }
    return (
        <div className="col-md-12 col-sm-12 col-12">
            <div className="d-flex justify-content-center mt-5 pt-5">
                <img className="imgLogin img-fluid " width="200px" src={logo} alt="" />
            </div>
            <div class="card text-center mt-5 pt-5 pb-5 w-50 h-500 offset-md-3  offset-3" >
                <div class="card-body">
                    <h3 class="card-title "> <b>Login With</b> </h3>
                    <button onClick={handleGoogleClick} className="w-75 h-25 btnLogin btn-lg" >
                        <img width="20px" src={google} alt="" /> Continue With Google
                    </button>
                    <p class="card-text">Don't have any account? <a href="#">Create an account</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;