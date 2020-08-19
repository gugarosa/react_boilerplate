import React from "react";

import { SidebarHeader } from "./SidebarHeader";
import { SidebarItem } from "./SidebarItem";

import "./sidebar.scss";

export const Sidebar = () => {
    return (
        <nav className="sidebar">
            <ul className="sidebar-menu">
                <SidebarHeader title="Humana" />
                <SidebarItem title="Início" icon="home" />
                <SidebarItem title="Perfil" icon="user" />
                <SidebarItem title="Produtos" icon="file-medical" />
                <SidebarItem title="Estatísticas" icon="chart-line" />
                <SidebarItem title="Sair" icon="sign-out-alt" />
            </ul>
        </nav>
    );
};
