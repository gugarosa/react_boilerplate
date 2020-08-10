import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../views/auth/login";
import Register from "../views/auth/register";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
