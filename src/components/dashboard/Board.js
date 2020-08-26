import React from "react";
import { BoardCrumb } from "./BoardCrumb";

import "./board.scss";

// Board
// Wraps the breadcrumbs and children components
export const Board = ({ children }) => {
    return (
        <div className="board">
            <BoardCrumb />
            {children}
        </div>
    );
};
