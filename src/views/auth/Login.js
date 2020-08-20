import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import { AuthContext } from "../../context/Auth";

import { Landing } from "../../components/auth/Landing";

export const Login = () => {
    const header = {
        title: "Bem-vindo!",
        subtitle: "Painel de Administração",
    };

    const footer = [
        {
            text: null,
            link: "Esqueci a senha",
            linkUrl: "/forgot-password",
            function: null,
        },
        {
            text: "Não possui uma conta?",
            link: "Registrar",
            linkUrl: "/register",
            function: null,
        },
    ];

    const { login } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Landing header={header} footer={footer} />
        // <div className="container-fluid">
        //     <div className="row auth">
        //         <div className="col-md-6 col-xl-5 p-4 p-md-5 auth-main">
        //             <div className="row no-gutters align-items-center mb-4 auth-main__header">
        //                 <img className="mr-1" src={logo} alt="Humana Life" />
        //                 <span className="font-weight-bold">Humana Life</span>
        //             </div>
        //             <div className="mb-5">
        //                 <h1 className="font-weight-bold">Bem-vindo!</h1>
        //                 <h4>Painel de Administração</h4>
        //             </div>
        //             <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
        //                 <div className="form-group">
        //                     <label className="font-weight-l-bold">E-mail</label>
        //                     <input
        //                         className="form-control"
        //                         name="email"
        //                         type="email"
        //                         placeholder="nome@email.com"
        //                         ref={register}
        //                     />
        //                 </div>
        //                 <div className="form-group mb-4">
        //                     <label className="font-weight-l-bold">Senha</label>
        //                     <input
        //                         className="form-control"
        //                         name="password"
        //                         type="password"
        //                         placeholder="********"
        //                         ref={register}
        //                     />
        //                 </div>
        //                 <button
        //                     className="btn btn-primary btn-block font-weight-bold"
        //                     onClick={() => login({ user: "user", token: "token" })}
        //                 >
        //                     <FontAwesomeIcon icon={["far", "sign-in-alt"]} /> Entrar
        //                 </button>
        //             </form>
        //             <hr></hr>
        //             <div className="mt-auto">
        //                 <Link to={"/forgot-password"} className="btn btn-link p-0 mb-2">
        //                     Esqueci a senha
        //                 </Link>
        //                 <div>
        //                     <span className="mr-1 font-weight-l-bold">Não possui uma conta?</span>
        //                     <Link to={"/register"} className="btn btn-link align-baseline p-0">
        //                         Registrar
        //                     </Link>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="col-md-6 col-xl-7 d-none d-md-block auth-alt"></div>
        //     </div>
        // </div>
    );
};
