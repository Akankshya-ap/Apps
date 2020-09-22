import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory} from "react-router-dom";
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] =useState("");
    const[password, setPassword] = useState("");

    const login = event=>{
        event.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            // login
            history.push('/');
        })
        .catch((e)=>alert(e.message));
    };

    const register = event=>{
        event.preventDefault();
        // do register
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push('/');
        })
        .catch((e)=>alert(e.message));
    };

    return (
        <div className="login">
            <Link to="/">
                <img 
                className="login_logo"
                src = "https://png.pngitem.com/pimgs/s/1-11991_amazon-logo-transparent-background-image-amazon-logo-white.png"
                alt=""
                />
            </Link>
        <div className="login_container">
            <h1>Sign In</h1>
            <form>
                <h5>Email</h5>
                <input value={email} type="email"/>
                <h5>Password</h5>
                <input value={password} onChange={event =>setEmail(event.target.value)} type="password"/>
                <button onclick={login} onChange={event =>setPassword(event.target.value)} type="submit" className="login_btn">Sign In</button>
            </form>
            <p>
                By signing-in you agree to Amazon's Conditions of Use & Sale. Please see out Privacy Notice, out Cookies Notice and our Incident-Based Ads Notice.
            </p>
            <button onclick={register} className="register_btn">Create your Aamzon Account</button>

        </div>
        </div>
    )
}

export default Login;
