import React from 'react';
import "./DropdownItem.css";
import NavItem from "./Navitem";

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


function DropdownItem({first,second,third,firstLink,secondLink,thirdLink}) {
    return (
        <div>
            {first && <p className="menu__item" >
                <Link to={firstLink}>{first}</Link>
            </p>}
            {second && <p href="#" className="menu__item">
            <Link to={secondLink}>{second}</Link>
            </p>}
            {third && <p href="#" className="menu__item">
            <Link to={thirdLink}>{third}</Link>
            </p>}
        </div>
    )
}

export default DropdownItem
