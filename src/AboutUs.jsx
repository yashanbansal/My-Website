import React from 'react';
import yashan from '../src/image/yashan.jpeg';

const AboutUs = () =>{
    return (
        <>
        <div className="container emp-profile">
        <form method="">
            <div className="row">
                <div className="col-md-4">
                <img src={yashan} alt="yashanpic"/>
                </div>

                <div className="col-md-6">
                    <div className="profile-head">
                        <h5>Yashan Bansal</h5>
                        <h6>Web Developer</h6>
                </div>
                </div>
            

            </div>

            <div className="row">
            { }
            <div className="col-md-4">
                <div className="profile-work">
                    <p>WORK LINK</p>
                    <a href="https://www.youtube.com/channel/UChgcw5U_WJZYuYV6b-LoGkA" target="_blank">Youtube</a><br/>
                    <a href="https://www.instagram.com/?hl=en" target="_blank">Instagram</a><br/>
                    <a href="https://www.facebook.com/profile.php?id=100011005447849" target="_blank">Facebook</a><br/>
                    <a href="https://twitter.com/yashan_bansal" target="_blank">Twitter</a><br/>
                    <a href="https://www.snapchat.com/add/yashan_bansal" target="_blank">SnapChat</a><br/>
                    <a href="https://www.linkedin.com/in/yashan-bansal-51200b1b7/" target="_blank">LinkedIn</a><br/>
                    <a href="https://github.com/yashanbansal" target="_blank">Github</a><br/>

                </div>
            </div>
            { }

            </div>


        </form>
        </div>

        </>
    );
}
export default AboutUs;