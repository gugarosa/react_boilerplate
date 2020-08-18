import React from "react";
import { Sidebar } from "../../components/dashboard/Sidebar";

import "./dashboard.scss";

export const Home = () => {
    return (
        <div>
            <Sidebar />
            <div className="board">Hey</div>
        </div>
    );
};
