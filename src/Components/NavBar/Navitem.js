import { React, useState } from 'react';
import "./Navitem.css";

function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <li className="nav__item">
                <p className="icon__button" onClick={()=>{setOpen(!open)}} >
                    {props.icon }
                </p>

                {open && <div onMouseLeave={()=>{setOpen(!open)}}> {props.children} </div>}
            </li>
        </div>
    )
}

export default NavItem
