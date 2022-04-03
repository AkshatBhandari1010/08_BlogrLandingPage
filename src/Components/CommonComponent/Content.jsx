import React from "react";
import "./CommonComponent.css"

const Content = (props) => {
    return (
        <>
        <h2 className="contentHead mb-4">
            {props.heading}
        </h2>
        <p className="contentPara">
            {props.paragraph}
        </p>
        </>
    );
}
export default Content;