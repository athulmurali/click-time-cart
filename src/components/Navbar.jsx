import React from 'react'
import {ITEM_CATALOGUE, OFFERS} from "../RouteConstants";
import Link from "react-router-dom/es/Link";
const Navbar = ()=>{
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Click Time </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link to={ITEM_CATALOGUE}>
                    <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                </Link>

                <Link to={OFFERS}>
                    <a className="nav-item nav-link" href="#">Offers</a>
                </Link>
                <a className="nav-item nav-link" href="#">Features</a>

                <a className="nav-item nav-link disabled" href="#">Premium</a>
            </div>
        </div>
    </nav>
}

export  default  Navbar
