import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="login">
            <Link to={"/register"} className="btn btn-info">
                Login
            </Link>
        </div>
    );
}

export default Login;
