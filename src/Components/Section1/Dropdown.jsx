import React from "react";
import "../../index.css";
import "./Section1.css";

const Dropdown = (props) => {
    return (
        <>
            <ul className="mobileDropdown">
                <li className="mb-2"><a href="#">{props.one}</a></li>
                <li className="mb-2"><a href="#">{props.two}</a></li>
                <li><a href="#">{props.three}</a></li>
            </ul>
        </>
    );
}
export default Dropdown;