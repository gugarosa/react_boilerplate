import React from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./landing.scss";

export const LandingForm = ({ form }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
            {form.input.map((item) => (
                <div className="form-group" key={item.name}>
                    <label className="font-weight-l-bold">{item.label}</label>
                    <input
                        className="form-control"
                        name={item.name}
                        type={item.type}
                        placeholder={item.placeholder}
                        ref={register}
                    />
                </div>
            ))}
            <button
                className="btn btn-primary btn-block font-weight-bold mt-4"
                onClick={() => form.button.function({ user: "user", token: "token" })}
            >
                <FontAwesomeIcon icon={["far", form.button.icon]} /> {form.button.text}
            </button>
        </form>
    );
};
