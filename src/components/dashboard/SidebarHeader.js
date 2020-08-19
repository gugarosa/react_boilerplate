import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./sidebar.scss";

export const SidebarHeader = ({ title }) => {
    return (
        <li className="sidebar-header">
            <Link to={"/dashboard"} className="sidebar-header__link">
                <span className="sidebar-header__link-text">{title}</span>
                <FontAwesomeIcon className="sidebar-header__link-icon" icon={["far", "bars"]} />
            </Link>
        </li>
    );
};
