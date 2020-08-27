import React from "react";
import { Link } from "react-router-dom";
import { LandingForm } from "./LandingForm";

import { LANDING_LOGO, LANDING_TITLE } from "../../utils/configComponents";

import "./landing.scss";

// Landing
// Provides a dynamic creation of landing pages
export const Landing = ({ header, form, footer }) => {
    return (
        <div className="container-fluid">
            <div className="row landing">
                <div className="col-md-6 col-xl-5 p-4 p-md-5">
                    <div className="row no-gutters align-items-center mb-4 landing-header">
                        <img className="mr-1" src={LANDING_LOGO} alt={LANDING_TITLE} />
                        <span className="font-weight-bold">{LANDING_TITLE}</span>
                    </div>
                    <div className="mb-5">
                        <h1 className="font-weight-bold">{header.title}</h1>
                        <h5>{header.subtitle}</h5>
                    </div>
                    {form ? <LandingForm form={form} /> : null}
                    <hr></hr>
                    <div className="mt-auto">
                        {footer.map((item) => (
                            <div className="mb-2" key={item.link}>
                                {item.text ? (
                                    <span className="mr-1 font-weight-l-bold">{item.text}</span>
                                ) : null}
                                <Link to={item.linkUrl} className="btn btn-link align-baseline p-0">
                                    {item.link}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-md-6 col-xl-7 d-none d-md-block landing__bg"></div>
            </div>
        </div>
    );
};
