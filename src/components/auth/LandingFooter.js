import React from "react";
import { Link } from "react-router-dom";

import "./landing.scss";

export const LandingFooter = ({ footer }) => {
    return (
        <>
            <hr></hr>
            <div className="mt-auto">
                {footer.map((item) => (
                    <div className="mb-2" key={item.link}>
                        {item.text ? (
                            <span className="mr-1 font-weight-l-bold">{item.text}</span>
                        ) : null}
                        {item.linkUrl ? (
                            <Link to={item.linkUrl} className="btn btn-link align-baseline p-0">
                                {item.link}
                            </Link>
                        ) : (
                            <button
                                onClick={() => item.function()}
                                className="btn btn-link align-baseline p-0"
                            >
                                {item.link}
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};
