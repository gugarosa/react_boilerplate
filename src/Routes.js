import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Login } from "./views/auth/Login";
import { Register } from "./views/auth/Register";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    );
};
