import React, { createContext, useReducer } from "react";

// State
const initialState = {
    isAuthorized: JSON.parse(localStorage.getItem("isAuthorized")) || false,
    user: null,
    token: null,
};

// Reducer
const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem("isAuthorized", true);
            return {
                ...state,
                isAuthorized: true,
            };
        case "LOGOUT":
            localStorage.setItem("isAuthorized", false);
            return {
                ...state,
                isAuthorized: false,
            };
        default:
            return state;
    }
};

// Context
export const AuthContext = createContext(initialState);

// Provider
export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    // Actions
    function login() {
        dispatch({
            type: "LOGIN",
        });
    }

    function logout() {
        dispatch({
            type: "LOGOUT",
        });
    }

    return <AuthContext.Provider value={{ state, login, logout }}>{children}</AuthContext.Provider>;
};
