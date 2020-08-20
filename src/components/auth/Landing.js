import React from "react";
import { LandingHeader } from "./LandingHeader";
import { LandingFooter } from "./LandingFooter";

import "./landing.scss";

export const Landing = ({ header, footer }) => {
    return (
        <div className="container-fluid">
            <div className="row landing">
                <div className="col-md-6 col-xl-5 p-4 p-md-5">
                    <LandingHeader header={header} />
                    <LandingFooter footer={footer} />
                </div>
                <div className="col-md-6 col-xl-7 d-none d-md-block landing__bg"></div>
            </div>
        </div>
    );
};
