import React from "react";
import "../../index.css"
import "./Section1.css";
import Navbar from "./Navbar"
import ContentSec1 from "./ContentSec1"

const Section1 = () => {
    return (
        <>
        <div className="section1">
            <div className="backgroundDiv" style={{background: `linear-gradient(to right, #ff8f70 0%, #ff3d54 100%)`}}>
                <div className="section1flex">
                <Navbar></Navbar>
                <ContentSec1></ContentSec1>
                </div>
            </div>
        </div>
        </>
    );
}
export default Section1;