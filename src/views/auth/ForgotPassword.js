import React from "react";

import { Landing } from "../../components/auth/Landing";

export const ForgotPassword = () => {
    const header = {
        title: "Resetar senha",
        subtitle:
            "Preencha com os dados utilizados no cadastro e lhe enviaremos um e-mail para resetar a senha.",
    };

    const form = {
        input: [
            {
                label: "E-mail",
                name: "email",
                type: "email",
                placeholder: "nome@email.com",
            },
        ],
        button: {
            function: () => {},
            icon: "unlock",
            text: "Resetar Senha",
        },
    };

    const footer = [
        {
            text: "Voltar para a",
            link: "página inicial",
            linkUrl: "/login",
        },
    ];

    return <Landing header={header} form={form} footer={footer} />;
};
