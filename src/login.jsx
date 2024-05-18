import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import {useNavigate } from "react-router-dom";
import './login.css'

function Login(){
    const [email, setEmail]=useState()
    const [password, setPassword]=useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email, password})
        .then(result => {console.log(result)
            if(result.data === "Success"){
                navigate('/home')
            }
        })
        .catch(err => console.log(err))
    }
    return (
        
        <div className="background d-flex justify-content-center align-items-center vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                    <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input 
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input 
                            type="password"
                            placeholder="Enter Password"
                            autoComplete="off"
                            name="password"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">LOG IN</button>
                    </form>
                    <p>Don't have an Account</p>
                    <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">SIGN UP</Link>
                    <p>Admin Login</p>
                    <Link to="/adminlogin" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Admin</Link>
                    
            </div>
        </div>
       
    );
}

export default Login;