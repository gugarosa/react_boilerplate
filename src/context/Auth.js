import React, { createContext, useReducer } from "react";

// State
const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: JSON.parse(localStorage.getItem("token")) || null,
};

// Reducer
const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            localStorage.setItem("token", JSON.stringify(action.payload.token));
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
            };
        case "LOGOUT":
            localStorage.clear();
            return {
                ...state,
                user: null,
                token: null,
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

// Additional functions
export const isAuthorized = (token) => {
    if (token) {
        return true;
    }

    return false;
};
