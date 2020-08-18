import React, { useContext } from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import { AuthContext, isAuthorized } from "./context/Auth";

import { Login } from "./views/auth/Login";
import { NotFound } from "./views/auth/NotFound";
import { Register } from "./views/auth/Register";

import { Home } from "./views/dashboard/Home";

// Authentication guard that checks whether user is authorized or not
const PrivateRoute = ({ component: Component, ...rest }) => {
    const { state } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthorized(state.token) ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
                )
            }
        />
    );
};

// Application routes
export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <PrivateRoute exact path="/" component={Home} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};
