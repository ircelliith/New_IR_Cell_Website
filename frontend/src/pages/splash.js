'use client';
import React, { useState, useEffect } from 'react';
import App from '../App';
import { motion, AnimatePresence } from "framer-motion"
//import { CSSTransition } from 'react-transition-group';
// Importing loader
import PacmanLoader from "react-spinners/PacmanLoader";
import HashLoader from "react-spinners/HashLoader";

import '../App.css';
import logo from "../components/icons/ircellLogo.png";

const SplashApp = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    // Custom css for loader
    const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
  background-color: #F73A48;
  color: #ffffff;
  margin-top: 20vh;
  padding-top: 10vh;
`;

function Loader()  {
    

    return(
        <AnimatePresence>
        <div>
            <div className='gap-6 flex flex-col items-center justify-center align-middle text-center' style={{background:"#F73A48", padding:"35px"}}>
                <HashLoader color={'#000000'} isLoading={isLoading}
                css={override} size={100} />
                <span style={{color:"#FFFFFF", fontSize:"2rem", fontWeight:"bolder"}}>Boarding the Flight to IR CELL ! Arrival Shortly</span>
            </div>
            <img src={logo} alt="IR Cell Logo" style={{width:"auto", height:"auto", margin:"auto", marginTop:"10vh"}}/>
        </div>
        </AnimatePresence>
    );
}

    return isLoading ?
        
         <Loader />:
        <div>
            <App />
        </div>
}

export default SplashApp;
