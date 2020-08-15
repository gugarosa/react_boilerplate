import React, { useContext } from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import { AuthContext } from "./context/Auth";

import { Login } from "./views/auth/Login";
import { NotFound } from "./views/auth/NotFound";
import { Register } from "./views/auth/Register";

import { Home } from "./views/dashboard/Home";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { state } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={(props) =>
                state.isAuthorized ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
                )
            }
        />
    );
};

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
