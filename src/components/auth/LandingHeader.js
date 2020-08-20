import React from "react";

import logo from "../../assets/img/logo.svg";
import "./landing.scss";

export const LandingHeader = ({ header }) => {
    return (
        <>
            <div className="row no-gutters align-items-center mb-4 landing-header">
                <img className="mr-1" src={logo} alt="Humana Life" />
                <span className="font-weight-bold">Humana Life</span>
            </div>
            <div className="mb-5">
                <h1 className="font-weight-bold">{header.title}</h1>
                <h5>{header.subtitle}</h5>
            </div>
        </>
    );
};
