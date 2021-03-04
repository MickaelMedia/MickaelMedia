import { React } from 'react';
import "./Dropdown.css";
import DropdownItem from "./DropdownItem";

function Dropdown({first,second,third,firstLink,secondLink,thirdLink}) {

    return (
        <div className="dropdown">
            <DropdownItem first={first} second={second} third={third} firstLink={firstLink} secondLink={secondLink} thirdLink={thirdLink}></DropdownItem>
        </div>
    )
}

export default Dropdown
