import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import logo from '../images/logo.png';
import Home from "../pages/Home"
import OpticalStructures from "../pages/OpticalStructures"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OpticalNumbers from '../pages/OpticalNumbers';

const Navbar = () => (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <div className="container-fluid justify-content-lg-start justify-content-xs-center  justify-content-md-center justify-content-sm-center text-center ">
            <a href="/" className="navbar-brand">
                <img src={logo} height="66" alt="CoolBrand"></img>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href='/'>Головна</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Оптичні структури
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="/structures" target='frame1'>Відомості
                                про сучасні оптичні покриття</a></li>
                            <li>
                                <hr className="dropdown-divider"></hr>
                            </li>
                            <li><a className="dropdown-item" href="/numbers" target='frame1'>Показники заломлення
                                матеріалів</a></li>
                        </ul>
                    </li>
                  
                </ul>
            </div>
        </div>
    </nav>




);

export default Navbar;