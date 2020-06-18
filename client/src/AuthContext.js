import React from "react";
import Axios from "axios";

const AuthContext = React.createContext();

const AuthContextProvider = (props) => {
    const initUserState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        posts: [],
    };
    const [userState, setUserState] = React.useState(initUserState);
    const [errState, setErrState] = React.useState({ err: null });

    const postAuth = (type, formData) => {
        Axios.post(`/auth/${type}`, formData)
            .then((res) => {
                const { token, user } = res.data;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                setUserState((prev) => ({
                    ...prev,
                    token,
                    user,
                }));
            })
            .catch((err) => setErrState({ err: err.response.data.errMsg }));
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ postAuth, userState, errState, logout }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthContextProvider };
