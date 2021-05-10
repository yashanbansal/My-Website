import React from 'react';
import { NavLink } from 'react-router-dom';

const Cards = (props) => {
    return (
        <>
        

        <div className="col-md-4 col-10 mx-auto">

            <div className="card">
            <img className="card-img-top screen" src={props.imgsrc} alt={props.imgsrc}/>
            <div className="card-body screen1">
             <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">{props.disc}</p>
            <NavLink to="/contact" className="btn btn-primary">Continue</NavLink>
            </div>
            </div>

            </div>

        </>
    );
}

export default Cards;