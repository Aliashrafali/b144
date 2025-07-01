import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () =>{
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 menu">
                        <nav>
                            <Link to={'/'} className="nav">Home</Link>
                            <Link to={'/About'} className="nav">About Us</Link>
                            <Link to={'/'} className="nav">Gallery</Link>
                            <Link to={'/'} className="nav">Contact Us</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}