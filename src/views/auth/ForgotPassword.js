import React from "react";
import { useForm } from "react-hook-form";

import { Landing } from "../../components/auth/Landing";

export const ForgotPassword = () => {
    const header = {
        title: "Resetar senha",
        subtitle:
            "Preencha com os dados utilizados no cadastro e lhe enviaremos um e-mail para resetar a senha.",
    };

    const footer = [
        {
            text: "Voltar para a",
            link: "página inicial",
            linkUrl: "/login",
            function: null,
        },
    ];

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Landing header={header} footer={footer}></Landing>
        // <div className="container-fluid">
        //     <div className="row auth">
        //         <div className="col-md-6 col-xl-5 p-4 p-md-5 auth-main">
        //             <div className="row no-gutters align-items-center mb-4 auth-main__header">
        //                 <img className="mr-1" src={logo} alt="Humana Life" />
        //                 <span className="font-weight-bold">Humana Life</span>
        //             </div>
        //             <div className="mb-5">
        //                 <h1 className="font-weight-bold">Resetar senha</h1>
        //                 <h5>
        //                     Preencha com os dados utilizados no cadastro e lhe enviaremos um e-mail
        //                     para resetar a senha.
        //                 </h5>
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
        //                 <button className="btn btn-primary btn-block font-weight-bold">
        //                     <FontAwesomeIcon icon={["far", "unlock"]} /> Resetar Senha
        //                 </button>
        //             </form>
        //             <hr></hr>
        //             <div className="mt-auto">
        //                 <div>
        //                     <span className="mr-1 font-weight-l-bold">Voltar para a</span>
        //                     <Link to={"/login"} className="btn btn-link align-baseline p-0">
        //                         página inicial
        //                     </Link>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="col-md-6 col-xl-7 d-none d-md-block auth-alt"></div>
        //     </div>
        // </div>
    );
};
