import React from 'react';
import "./Navbar.css";

function Navbar(props) {
    return (
        <div>
           <nav className="navbar">
               <ul className="navbar__nav"> {props.children}</ul>
            </nav> 
        </div>
    )
}

export default Navbar
