import React from "react";

import { Landing } from "../../components/auth/Landing";

export const NotFound = ({ history }) => {
    const header = {
        title: "404",
        subtitle: "Por acaso você está perdido? Esta página ainda não existe.",
    };

    const form = null;

    const footer = [
        {
            text: "Voltar para a",
            link: "página anterior",
            linkUrl: null,
            function: history.goBack,
        },
    ];

    return <Landing header={header} form={form} footer={footer} />;
};
