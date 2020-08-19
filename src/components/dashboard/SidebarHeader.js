import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./sidebar.scss";

export const SidebarHeader = ({ title }) => {
    return (
        <li className="sidebar-header">
            <a className="sidebar-header__link" href="/#">
                <span className="sidebar-header__link-text">{title}</span>
                <FontAwesomeIcon className="sidebar-header__link-icon" icon={["far", "bars"]} />
            </a>
        </li>
    );
};
