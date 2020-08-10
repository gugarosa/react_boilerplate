import React from "react";
import { Switch, Route } from "react-router-dom";

import App from "./components/app";

function Router() {
    return (
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/home" component={App} />
        </Switch>
    );
}

export default Router;
