import React from "react";
import './Section3.css';
import Content from "../CommonComponent/Content";
import sec3desktopIllustration from "../../images/illustration-phones.svg";

const Section3 = () => {
    return (
        <>
        <section className="sec3">
            <div className="left3">

            </div>
            <div className="right3">
                <h1 className="text-4xl font-semibold">State of the Art Infrastructure</h1>

                <Content paragraph="With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive."></Content>
            </div>
        </section>
        </>
    );
}

export default Section3;