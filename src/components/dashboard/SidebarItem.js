import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./sidebar.scss";

export const SidebarItem = ({ active, title, icon, link }) => {
    return (
        <li className="sidebar-item">
            <Link
                to={link}
                className={`sidebar-item__link ${active ? "sidebar-item__link--active" : ""}`}
            >
                <FontAwesomeIcon className="sidebar-item__link-icon" icon={["far", icon]} />
                <span className="sidebar-item__link-text">{title}</span>
            </Link>
        </li>
    );
};
