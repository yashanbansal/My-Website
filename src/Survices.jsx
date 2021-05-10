import React from 'react';
import Data from './Data.jsx';
import Cards from './Card.jsx';
import Footer from './Footer.jsx';
const Survices = () => {
    return (
    <>
    <div className="my-5">
        <h1 className="text-center btn-danger">MY SKILLS</h1>
    </div>
    <div className="container-fluid mb-5">
        <div className="row">
            <div className="col-10 mx-auto">
            <div className="row gy-4">
            {
                Data.map((val, ind)=>{
                    return <Cards imgsrc={val.imgsrc} title={val.title} disc={val.disc} />
                })
            }
            </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
    );
}

export default Survices;


