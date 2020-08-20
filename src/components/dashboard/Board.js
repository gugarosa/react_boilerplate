import React from "react";

import "./board.scss";

export const Board = ({ children }) => {
    return (
        <div className="board">
            {/* <div className="board-crumb mb-3">
                <small class="text-muted">Bread > Crumb > Page</small>
            </div> */}
            {children}
        </div>
    );
};
