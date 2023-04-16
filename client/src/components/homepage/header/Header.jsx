import React from "react";
import { useRef } from "react";

import Styles from './Header.scss';
const Header = (props)=>{
    const navRef=useRef();
    const showNavbar=()=>{
        navRef.current.classList.toggle("home_header--responsive--nav");
    };
    let loginInfo="";
    if(props.isLogin=="true"){
        loginInfo=props.name;
    }
    else{
        loginInfo=<a href="#">Login</a>;
    }
    return (
        <header className="home_header">
            <a href="#"><img src="https://iiitl.ac.in/workshop/images/generic/final_logo_web_extended.png" className="home_header--logo" /></a>
            <nav ref={navRef} className="home_header--nav">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#" className="home_header--dropdown-menu">
                        Departments <span style={{fontSize:10}}>&#9947;</span>
                        <div className="home_header--dropdown-content">
                          <a href="#">CS</a>
                          <a href="#">ECE</a>
                          <a href="#">EEE</a>
                        </div>
                </a>
                <a href="#">Courses</a>
                <a href="#">Contact Us</a>
                <button className="home_header--dropdown home_header--dropdown-closeBtn" onClick={showNavbar}>&#9747;</button>
            </nav>
            <button className="home_header--login">
                {loginInfo}
            </button>
            <button
				className="home_header--dropdown"
				onClick={showNavbar}>
				&#9776;
			</button>
            
        </header>
    )
}
export default Header;