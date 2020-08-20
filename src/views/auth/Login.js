import React, { useContext } from "react";

import { AuthContext } from "../../context/Auth";
import { Landing } from "../../components/auth/Landing";

export const Login = () => {
    const { login } = useContext(AuthContext);

    const header = {
        title: "Bem-vindo!",
        subtitle: "Painel de Administração",
    };

    const form = {
        input: [
            {
                label: "E-mail",
                name: "email",
                type: "email",
                placeholder: "nome@email.com",
            },
            {
                label: "Senha",
                name: "password",
                type: "password",
                placeholder: "********",
            },
        ],
        button: {
            function: login,
            icon: "sign-in-alt",
            text: "Entrar",
        },
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

    return <Landing header={header} form={form} footer={footer} />;
};
