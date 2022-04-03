import React from "react";
import "./Section2.css"
import Content from "../CommonComponent/Content";
import mobileIllustration from "../../images/illustration-editor-mobile.svg";

const Section2 = () => {
    return (
        <>
        <section className="sec2">
            <h1 className="sec2head">
                Designed for the future
            </h1>

            <div className="sec2content">
                
                <div className="sec2mobileIllustrationDiv">
                    <object className="mobileIllustration" type="image/svg+xml" data={mobileIllustration}></object>
                </div>

                <div className="textBlock">
                    <div className="mb-16">
                        <Content 
                        heading="Introducing an extensible editor"
                        paragraph="Blogr features an exceedingly intuitive interface which lets you focus on one thing: creaing content. The editor supports management of multiple blogs and allows wasy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.">
                        </Content>
                    </div>

                    <Content
                    heading="Robust content management"
                    paragraph="Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control.">
                    </Content>
                </div>

                <div className="sec2desktopIllustrationDiv"></div>
            </div>
        </section>
        </>
    );
}

export default Section2;