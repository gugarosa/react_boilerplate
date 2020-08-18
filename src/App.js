import React from "react";
import { Routes } from "./Routes";
import { AuthProvider } from "./context/Auth";

import "./App.scss";
import "./utils/externalPackages";

// Application
// Note that it wraps the authetication provider and routes
function App() {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    );
}

export default App;
