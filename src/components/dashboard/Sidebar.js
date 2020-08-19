import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./dashboard.scss";

export const Sidebar = () => {
    return (
        <nav className="sidebar">
            <div className="sidebar-header">
                <span className="sidebar-header__text">Olaf</span>
                <FontAwesomeIcon icon={["far", "sign-in-alt"]} />
            </div>
            <ul className="sidebar-menu">
                <li className="sidebar-menu__item">
                    <a className="sidebar-menu__item-link" href="/#">
                        <FontAwesomeIcon icon={["far", "sign-in-alt"]} />
                        <span className="sidebar-menu__item-link-text">Cats</span>
                    </a>
                </li>
                <li className="sidebar-menu__item">
                    <a className="sidebar-menu__item-link" href="/#">
                        <FontAwesomeIcon icon={["far", "sign-out-alt"]} />
                        <span className="sidebar-menu__item-link-text">Dogs</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};
