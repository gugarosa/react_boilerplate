import React from "react";

import { Landing } from "../../components/auth/Landing";

// Register
// Implements the registration view
export const Register = () => {
    const header = {
        title: "Registro",
        subtitle: "Preencha o formulário a seguir para criar a sua conta gratuitamente.",
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
            {
                label: "Quero receber novidades sobre os produtos da Humana Life",
                name: "news",
                type: "checkbox",
            },
        ],
        button: {
            function: () => {},
            icon: "check",
            text: "Registrar",
        },
    };

    const footer = [
        {
            text: "Ao registrar, você está de acordo com os",
            link: "Termos de Serviço",
            linkUrl: "/login",
        },
        {
            text: "Já possui uma conta?",
            link: "Entrar",
            linkUrl: "/login",
        },
    ];

    return <Landing header={header} form={form} footer={footer} />;
};
