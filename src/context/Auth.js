import React, { createContext, useReducer } from "react";

// State
const initialState = () => {
    let isAuthorized = false;
    const user = JSON.parse(localStorage.getItem("user")) || null;
    const token = JSON.parse(localStorage.getItem("token")) || null;

    if (token) {
        isAuthorized = true;
    }

    return {
        isAuthorized: isAuthorized,
        user: user,
        token: token,
    };
};

// Reducer
const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem("token", JSON.stringify(action.payload.token));
            return {
                ...state,
                isAuthorized: true,
                token: action.payload.token,
            };
        case "LOGOUT":
            localStorage.clear();
            return {
                ...state,
                isAuthorized: false,
                token: null,
            };
        default:
            return state;
    }
};

// Context
export const AuthContext = createContext(initialState());

// Provider
export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState());

    // Actions
    function login(data) {
        dispatch({
            type: "LOGIN",
            payload: data,
        });
    }

    function logout() {
        dispatch({
            type: "LOGOUT",
        });
    }

    return <AuthContext.Provider value={{ state, login, logout }}>{children}</AuthContext.Provider>;
};
