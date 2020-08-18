import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AuthContext } from "../../context/Auth";

import "./auth.scss";
import logo from "../../assets/img/logo.svg";

export const Login = () => {
    const { login } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="container-fluid">
            <div className="row login">
                <div className="col-md-6 col-xl-5 p-4 p-md-5 login-main">
                    <div className="row no-gutters align-items-center mb-4 login-main__header">
                        <img className="mr-1" src={logo} alt="Humana Life" />
                        <span className="font-weight-bold">Humana Life</span>
                    </div>
                    <div className="mb-5">
                        <h2 className="font-weight-bold">Bem-vindo!</h2>
                        <h4>Painel de Admnistração</h4>
                    </div>
                    <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label className="font-weight-l-bold">E-mail</label>
                            <input
                                className="form-control"
                                name="email"
                                type="email"
                                placeholder="nome@email.com"
                                ref={register}
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label className="font-weight-l-bold">Senha</label>
                            <input
                                className="form-control"
                                name="password"
                                type="password"
                                placeholder="********"
                                ref={register}
                            />
                        </div>
                        <button
                            className="btn btn-primary btn-block font-weight-bold"
                            onClick={() => login({ user: "user", token: "token" })}
                        >
                            <FontAwesomeIcon icon={["far", "sign-in-alt"]} /> Entrar
                        </button>
                    </form>
                    <hr></hr>
                    <div className="mt-auto">
                        <Link to={"/forgot-password"} className="btn btn-link p-0 mb-2">
                            Esqueci a senha
                        </Link>
                        <div>
                            <span className="mr-1 font-weight-l-bold">Não possui uma conta?</span>
                            <Link to={"/register"} className="btn btn-link align-baseline p-0">
                                Registrar
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-7 d-none d-md-block login-alt"></div>
            </div>
        </div>
    );
};
