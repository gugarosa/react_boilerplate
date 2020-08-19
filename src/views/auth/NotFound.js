import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./auth.scss";
import logo from "../../assets/img/logo.svg";

export const NotFound = ({ history }) => {
    return (
        <div className="container-fluid">
            <div className="row auth">
                <div className="col-md-6 col-xl-5 p-4 p-md-5 auth-main">
                    <div className="row no-gutters align-items-center mb-4 auth-main__header">
                        <img className="mr-1" src={logo} alt="Humana Life" />
                        <span className="font-weight-bold">Humana Life</span>
                    </div>
                    <div className="mb-5">
                        <h1 className="font-weight-bold">404</h1>
                        <h5>Por acaso você está perdido? Esta página ainda não existe.</h5>
                    </div>
                    <button
                        className="btn btn-primary btn-block font-weight-bold"
                        onClick={() => history.goBack()}
                    >
                        <FontAwesomeIcon icon={["far", "undo"]} /> Voltar
                    </button>
                </div>
                <div className="col-md-6 col-xl-7 d-none d-md-block auth-alt"></div>
            </div>
        </div>
    );
};
