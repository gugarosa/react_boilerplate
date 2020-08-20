import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import { Board } from "../../components/dashboard/Board";
import { Toolbar } from "../../components/dashboard/Toolbar";
import { Sidebar } from "../../components/dashboard/Sidebar";

import { Home } from "./Home";
import { Item } from "./Item";

export const Dashboard = ({ location, match }) => {
    return (
        <>
            <Sidebar location={location} />
            <Toolbar />
            <Board>
                <Switch>
                    <Route exact path={match.path} component={Home} />
                    <Route exact path={match.path + "/item"} component={Item} />
                    <Redirect to="/dashboard" />
                </Switch>
            </Board>
        </>
    );
};
