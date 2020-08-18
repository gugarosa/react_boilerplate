import React from "react";
import "./dashboard.scss";

export const Sidebar = () => {
    return (
        <nav className="sidebar">
            <ul className="sidebar-nav">
                <li className="sidebar-nav__item">
                    <a href="#">
                        <span>Cats</span>
                    </a>
                </li>
                <li className="sidebar-nav__item">
                    <a href="#">
                        <span>Dogs</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};
