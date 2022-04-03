import React, { useState } from "react";
import { ReactComponent as Open } from "../../images/icon-hamburger.svg";
import { ReactComponent as Close } from "../../images/icon-close.svg";
import "../../index.css"
import "./Section1.css";
import NavLink from "./NavLink"
import MobileMenu from "./MobileMenu";

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const open = <Open className="open" onClick = {() => setMenu(!menu)}></Open>;
    const close = <Close className="close" onClick = {() => setMenu(!menu)}></Close>;
    
    return (
        <>
        <nav className="navbar w-screen">
            <div className="flexcon w-full">
                <div className="navLeft">

                    <div className="siteLogo mr-12"></div>

                    <ul className="desktopUL flex font-normal">
                        <NavLink link="Product" one="first" two="second" three="third"></NavLink>

                        <NavLink link="Company" one="first" two="second" three="third"></NavLink>

                        <NavLink link="Connect" one="first" two="second" three="third"></NavLink>
                    </ul>

                </div>
                    
                <div className="desktopLoginSignupDiv">
                    <a href="#" className="desktopLogin">Login</a>
                    <button className="desktopSignup">
                        Sign Up
                    </button>
                </div>

                <div className="hamburger">
                    {menu ? close : open}
                </div>
            </div>
            {menu && <MobileMenu></MobileMenu>}
        </nav>
        </>
    );
}

export default Navbar;