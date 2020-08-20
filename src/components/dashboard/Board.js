import React from "react";
import { BoardCrumb } from "./BoardCrumb";

import "./board.scss";

export const Board = ({ children }) => {
    return (
        <div className="board">
            <BoardCrumb />
            {children}
        </div>
    );
};
