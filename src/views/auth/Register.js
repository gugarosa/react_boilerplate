import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./auth.scss";
import logo from "../../assets/img/logo.svg";

export const Register = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="container-fluid">
            <div className="row auth">
                <div className="col-md-6 col-xl-5 p-4 p-md-5 auth-main">
                    <div className="row no-gutters align-items-center mb-4 auth-main__header">
                        <img className="mr-1" src={logo} alt="Humana Life" />
                        <span className="font-weight-bold">Humana Life</span>
                    </div>
                    <div className="mb-5">
                        <h1 className="font-weight-bold">Registro</h1>
                        <h5>
                            Preencha o formulário a seguir para criar a sua conta gratuitamente.
                        </h5>
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
                        <div className="form-group">
                            <label className="font-weight-l-bold">Senha</label>
                            <input
                                className="form-control"
                                name="password"
                                type="password"
                                placeholder="********"
                                ref={register}
                            />
                        </div>
                        <div className="form-group mb-4">
                            <div className="custom-control custom-checkbox">
                                <input
                                    className="custom-control-input"
                                    name="receiveNews"
                                    type="checkbox"
                                    id="news"
                                    ref={register}
                                />
                                <label className="custom-control-label" htmlFor="news">
                                    <small>
                                        Quero receber novidades sobre os produtos da Humana Life
                                    </small>
                                </label>
                            </div>
                        </div>
                        <button className="btn btn-primary btn-block font-weight-bold">
                            <FontAwesomeIcon icon={["far", "check"]} /> Registrar
                        </button>
                    </form>
                    <hr></hr>
                    <div className="mt-auto">
                        <div className="mb-2">
                            <span className="mr-1">Ao registrar, você está de acordo com os</span>
                            <Link to={"/login"} className="btn btn-link align-baseline p-0">
                                Termos de Serviço
                            </Link>
                        </div>
                        <div>
                            <span className="mr-1 font-weight-l-bold">Já possui uma conta?</span>
                            <Link to={"/login"} className="btn btn-link align-baseline p-0">
                                Entrar
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-7 d-none d-md-block auth-alt"></div>
            </div>
        </div>
    );
};
