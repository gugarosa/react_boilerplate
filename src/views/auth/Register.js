import React from "react";
import { Link } from "react-router-dom";

export const Register = () => {
    return (
        <div className="register">
            <Link to={"/login"} className="btn btn-danger">
                Register
            </Link>
        </div>
    );
};
