import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import { Sidebar } from "../../components/dashboard/Sidebar";

import { Home } from "./Home";
import { Item } from "./Item";

import "./dashboard.scss";

export const Dashboard = ({ location, match }) => {
    return (
        <>
            <Sidebar location={location} />
            <div className="dashboard">
                <Switch>
                    <Route exact path={match.path} component={Home} />
                    <Route exact path={match.path + "/item"} component={Item} />
                    <Redirect to="/dashboard" />
                </Switch>
            </div>
        </>
    );
};
