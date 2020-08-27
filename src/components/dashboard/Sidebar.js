import React from "react";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarItem } from "./SidebarItem";

import { SIDEBAR_ITEMS, SIDEBAR_TITLE } from "../../utils/configComponents";

import "./sidebar.scss";

// Sidebar
// Creates a fully-customizable sidebar
export const Sidebar = ({ location }) => {
    return (
        <nav className="sidebar">
            <ul className="sidebar-menu">
                <SidebarHeader title={SIDEBAR_TITLE} />
                {SIDEBAR_ITEMS.map((item) => (
                    <SidebarItem
                        active={item.link === location.pathname}
                        key={item.link}
                        title={item.title}
                        icon={item.icon}
                        link={item.link}
                    />
                ))}
            </ul>
        </nav>
    );
};
