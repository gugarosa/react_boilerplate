import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Login, Register } from "./views/auth";

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
