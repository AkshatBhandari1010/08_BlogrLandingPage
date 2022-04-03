import React from "react";
import "./Section4.css";
import Content from "../CommonComponent/Content";

const Section4 = () => {
    return (
        <>
        <section className="sec4">
            <div className="left4">

            </div>
            <div className="right4">
                <div className="mb-14">
                    <Content heading="Free, open, simple" paragraph="Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn."></Content>
                </div>
                <Content heading="Powerful tooling" paragraph="Batteries included. We built a simple and straightforward CLI tool taht makes customization and deployment a breeze, but capable of producing even the most complicated sites."></Content>
            </div>
        </section>
        </>
    );
}

export default Section4;