import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./sidebar.scss";

export const SidebarItem = ({ title, icon }) => {
    return (
        <li className="sidebar-item">
            <a className="sidebar-item__link" href="/#">
                <FontAwesomeIcon className="sidebar-item__link-icon" icon={["far", icon]} />
                <span className="sidebar-item__link-text">{title}</span>
            </a>
        </li>
    );
};
