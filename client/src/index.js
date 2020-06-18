import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./AuthContext.js";
import { PostContextProvider } from "./PostContext.js";

ReactDOM.render(
    <BrowserRouter>
        <AuthContextProvider>
            <PostContextProvider>
                <App />
            </PostContextProvider>
        </AuthContextProvider>
    </BrowserRouter>,
    document.getElementById("root")
);
