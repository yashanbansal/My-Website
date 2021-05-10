import React from 'react';

import { NavLink } from 'react-router-dom';
import web from "../src/image/b.png";
import Footer from './Footer.jsx';
const About = () => {
    return (
    <>
    <section id="header" className="d-flex align-items-center">
    <div className="container-fluid nav_bg">
        <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h3>
                    <strong className="brand-name"> For Queries</strong><br/><br/>

                    Email : yashanbansal001@gmail.com<br/>
                    Mob : 9807860086
                        
                    </h3>
                    <h5 className="my-3">
                    <p>WORK LINK</p>
                    <a href="https://www.youtube.com/channel/UChgcw5U_WJZYuYV6b-LoGkA" target="_blank">Youtube</a><br/>
                    <a href="https://www.instagram.com/?hl=en" target="_blank">Instagram</a><br/>
                    <a href="https://www.facebook.com/profile.php?id=100011005447849" target="_blank">Facebook</a><br/>
                    <a href="https://twitter.com/yashan_bansal" target="_blank">Twitter</a><br/>
                    <a href="https://www.snapchat.com/add/yashan_bansal" target="_blank">SnapChat</a><br/>
                    <a href="https://www.linkedin.com/in/yashan-bansal-51200b1b7/" target="_blank">LinkedIn</a><br/>
                    <a href="https://github.com/yashanbansal" target="_blank">Github</a><br/>
                    </h5>   
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={web}
                    className="img-fluid animated"
                    alt="home img"
                />
                </div>
            </div>
            </div>
        </div>
    </div>

    </section>
    <Footer/>
    </>
    );
}

export default About;