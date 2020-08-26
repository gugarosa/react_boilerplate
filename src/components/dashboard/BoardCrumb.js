import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./board.scss";

// BoardCrumb
// Provides a dynamic creation of breadcrumbs
export const BoardCrumb = () => {
    return (
        <div className="board-crumb text-muted mb-2">
            <FontAwesomeIcon className="mr-2" icon={["far", "compass"]} />
            <span>Bread > Crumb > Page</span>
        </div>
    );
};
