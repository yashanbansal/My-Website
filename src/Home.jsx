import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/image/img1.svg";
import Footer from './Footer.jsx';
const Home = () => {
    return (
    <>
    <section id="header" className="d-flex align-items-center">
    <div className="container-fluid nav_bg">
        <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h3>
                    Bachelor of Technology in Computer Science (Undergraduate)
                        <strong className="brand-name"> Chitkara University</strong>
                    </h3>
                    <h5 className="my-3">
                    A Fervent person and proficient in Python 
                    and Full Stack Web Development seeks to establish 
                    a career in the field of Web Development and Data Science 
                    in a progressive organization where I can enhance my skills 
                    and learning to contribute to the success of the organization.
                    </h5>
                    <div className="mt-3">
                    <NavLink to="/survices" className="btn-get-started ">Explore</NavLink>
                    </div>
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

export default Home;
