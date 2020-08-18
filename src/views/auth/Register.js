import React from "react";
import { useForm } from "react-hook-form";

export const Register = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="register">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="email" type="email" ref={register({ required: true })}></input>
                <input name="password" type="password" ref={register({ required: true })}></input>
                <button>Submit</button>
            </form>
        </div>
    );
};
