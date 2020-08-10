import React from "react";
import { Link } from "react-router-dom";

function Register() {
    return (
        <div className="register">
            <Link to={"/login"} className="btn btn-danger">
                Register
            </Link>
        </div>
    );
}

export default Register;
