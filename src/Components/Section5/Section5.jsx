import React from "react";
import "./Section5.css";
import siteLogo from "../../images/logo.svg";

const Section5 = () => {
    return(
        <>
        <section className="sec5">
            <div className="flex">

                <div className="con">
                    <object className="blogrLogo" type="image/svg+xml" data={siteLogo}></object>
                </div>

                <div className="con mb-8">
                    <h5>Product</h5>
                    <a href="#">Overview</a>
                    <a href="#">Pricing</a>
                    <a href="#">Marketplace</a>
                    <a href="#">Features</a>
                    <a href="#">Integrations</a>
                </div>

                <div className="con mb-8">
                    <h5>Company</h5>
                    <a href="#">About</a>
                    <a href="#">Team</a>
                    <a href="#">Blog</a>
                    <a href="#">Careers</a>
                </div>

                <div className="con">
                    <h5>Connect</h5>
                    <a href="#">Contact</a>
                    <a href="#">Newsletter</a>
                    <a href="#">LinkedIn</a>
                </div>
            </div>
        </section>
        </>
    );
}

export default Section5;