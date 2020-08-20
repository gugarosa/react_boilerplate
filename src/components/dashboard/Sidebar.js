import React from "react";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarItem } from "./SidebarItem";

import "./sidebar.scss";

export const Sidebar = ({ location }) => {
    const items = [
        {
            title: "Dashboard",
            icon: "home",
            link: "/dashboard",
        },
        {
            title: "Perfil",
            icon: "user",
            link: "/dashboard/profile",
        },
        {
            title: "Produtos",
            icon: "file-medical",
            link: "/dashboard/item",
        },
        {
            title: "Estatísticas",
            icon: "chart-line",
            link: "/dashboard/stats",
        },
        {
            title: "Sair",
            icon: "sign-out-alt",
            link: "/dashboard/logout",
        },
    ];

    return (
        <nav className="sidebar">
            <ul className="sidebar-menu">
                <SidebarHeader title="Humana" />
                {items.map((item) => (
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
