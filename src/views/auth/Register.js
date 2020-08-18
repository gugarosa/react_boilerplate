import React from "react";
import { useForm } from "react-hook-form";

import { find } from "../../services/item";

export const Register = () => {
    const { register, handleSubmit } = useForm();

    const getData = async () => {
        const res = await find("1");
        console.log(res);
    };

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
            <button onClick={getData}>GetData</button>
        </div>
    );
};
