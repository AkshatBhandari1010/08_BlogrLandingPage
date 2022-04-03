import React from "react";
import "../../index.css";
import "./Section1.css";

const ContentSec1 = () => {
    return (
        <>
        <div className="contentSec1">
            <h1 className="headingSec1 font-semibold mb-5 text-6xl text-center">
                A modern publishing platform
            </h1>
            <p className="paraSec1 mb-11 text-center">
                Grow your audience and build your online brand
            </p>
            <div className="contentButton">
                <button className="startForFree">
                    Start for Free
                </button>
                <button className="learnMore font-semibold ml-5">
                    Learn More
                </button>
            </div>
        </div>
        </>
    );
}

export default ContentSec1;