import React from "react";
import "../../index.css"
import "./Section1.css";
import { ReactComponent as Arrow } from "../../images/icon-arrow-light.svg";

const NavLink = (props) => {

    const arrow = <Arrow className="arrow"></Arrow>;

    const dropdown = <div className="dropdownDiv">
                        <ul className="dropdown">
                            <li className="mb-2"><a href="#">{props.one}</a></li>
                            <li className="mb-2"><a href="#">{props.two}</a></li>
                            <li><a href="#">{props.three}</a></li>
                        </ul>
                    </div>
    return (
        <>
        <li className="navLink mr-12">
            <a href="#">{props.link}</a>
            <div className="arrowDiv">
                {arrow}
            </div>
            {dropdown}
        </li>
        </>
    );
}

export default NavLink;