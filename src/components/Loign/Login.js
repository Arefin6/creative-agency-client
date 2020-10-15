import React from 'react';
import logo from '../../images/logos/logo.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import googleLogo from '../../images/icons/google.png';
import './Login.css';
import { useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebaseConfig';
import { userContext } from '../../App';
import { useContext } from 'react';
firebase.initializeApp(firebaseConfig);

const Login = () => {
    
    const [loggedInUser,setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    var provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleLogin = () =>{
        firebase.auth().signInWithPopup(provider).then(function(result) {
           
            // The signed-in user info.
            var {displayName,email} = result.user;
            const signedInUser = {name:displayName,email};
            setLoggedInUser(signedInUser);
            storeAuthToken();
            history.replace(from);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
        }
          const storeAuthToken = () =>{
            firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function(idToken) {
                sessionStorage.setItem('token',idToken);
                // Send token to your backend via HTTPS
                // ...
              }).catch(function(error) {
                // Handle error
              });
        } 
    
    return (
        <div>
            <img src={logo} alt=""  className="logo"/>
             <div className="login-container">
                <h4 style={{marginLeft:"40%",marginTop:"5%"}}>Login With</h4> 
             <button onClick={handleGoogleLogin} className="btn-login" >
                 <img src={googleLogo}  alt="" style={{width:"40px"}}/>
                 Continue With Google
             </button>

             </div>
        </div>
    );
};

export default Login;