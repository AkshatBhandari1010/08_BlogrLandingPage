import React, {Component} from "react";
import "../../index.css";
import "./Section1.css";
import { ReactComponent as Arrow } from "../../images/icon-arrow-dark.svg";
import Dropdown from "./Dropdown";

const MobileMenu = () => {
    return (
        <>
        <div className="mobileMenuDiv">
            <ul className="mobileMenuUL">
                <li id="mobileNavLink"className="mobileNavLink">
                    <a href="#">Product</a>
                    <div className="arrowDiv">
                    <Arrow className="arrow"></Arrow>
                    </div>
                    <div className="mobileDropdownDiv">
                        <ul className="mobileDropdown">
                            <li className="mb-2">
                                <a href="#">Contact</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Newsletter</a>
                            </li>
                            <li>
                                <a href="#">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li id="mobileNavLink" className="mobileNavLink">
                    <a href="#">Company</a>
                    <div className="arrowDiv">
                    <Arrow className="arrow"></Arrow>
                    </div>
                    <div className="mobileDropdownDiv">
                        <ul className="mobileDropdown">
                            <li className="mb-2">
                                <a href="#">Contact</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Newsletter</a>
                            </li>
                            <li>
                                <a href="#">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li id="mobileNavLink" className="mobileNavLink">
                    <a href="#">Connect</a>
                    <div className="arrowDiv">
                    <Arrow className="arrow"></Arrow>
                    </div>
                    <div className="mobileDropdownDiv">
                        <ul className="mobileDropdown">
                            <li className="mb-2">
                                <a href="#">Contact</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Newsletter</a>
                            </li>
                            <li>
                                <a href="#">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                </li>

                <div className="mobileLoginSignupDiv">
                <a href="#" className="mobileLogin mb-4">
                    Login
                </a>
                <button className="mobileSignup" style={{background: `linear-gradient(to right, #ff8f70 0%, #ff3d54 100%)`}}>
                    Sign Up
                </button>
            </div>
            </ul>
        </div>
        </>
    );
}
export default MobileMenu;