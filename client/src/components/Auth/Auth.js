import React from "react";
import AuthForm from "./AuthForm.js";
import styled from "styled-components";

const AuthFormContainer = styled.div`
    border-left: 1px solid black;
    width: 100%;
    flex: 3;

    background-color: #222222;
`;
const TypeSelectSlider = styled.hr`
    width: 166px;
    margin-left: 32px;
    margin-bottom: 0px;

    border: 3px solid #b1f0d2;

    transition: 0.3s;
    transition-timing-function: cubic-bezier(0, 0, 0.05, 1);

    @media (max-width: 420px) {
        display: none;
    }
`;
const TypeSelect = styled.div`
    padding-bottom: 10px;
    margin-left: 32px;
    margin-right: 32px;

    display: inline-block;

    color: #222222;
    font-size: 50px;
    font-weight: 700;
    opacity: 0.5;
    border: none;
    background: none;

    transition: 0.3s;
    transition-timing-function: cubic-bezier(0, 0, 0.05, 1);

    cursor: pointer;

    &:hover {
        color: #222222;
    }

    @media (max-width: 420px) {
        margin-left: 20px;
        margin-right: 80px;
    }
`;
const TypeSelectContainer = styled.div`
    width: 100%;

    flex: 0.8;
    position: relative;
    padding-top: 15px;
    border-left: 2px solid white;

    & > div {
        position: absolute;
        bottom: 0px;
    }

    @media (max-width: 420px) {
        padding-top: 15%;
    }
`;
const AuthContainer = styled.div`
    height: 100vh;

    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    top: 0px;
    right: 0px;

    background-color: #f5f5f5;

    transition: 0.2s;
    box-shadow: -5px 0px 20px 0px #22222250;

    @media (max-width: 990px) {
        width: 100%;
        display: none;
        position: absolute;
        top: 100%;
    }
`;

const MobileAuthCTA = styled.button`
    width: 60%;
    height: 80px;

    display: none;
    position: relative;
    bottom: -50px;
    align-self: center;

    background-color: #222222;
    border: none;
    color: #f5f5f5;
    font-size: 25px;

    cursor: pointer;
    outline: none;

    transition: 0.1s;

    &:hover {
        background-color: #333333;
        transition: 0.1s;
    }
    &:active {
        background-color: #333333;
        bottom: -51px;
        transition: 0s;
    }

    @media (max-width: 990px) {
        display: inline-block;
    }
`;
const WelcomeInfoContainer = styled.div`
    width: 50%;
    margin-left: 100px;

    & > h1 {
        font-size: 60px;
        margin-bottom: 20px;
    }
    & > p {
        width: 80%;
        font-size: 20px;
        line-height: 1.5;
    }

    @media (max-width: 1366px) {
        width: 80%;
        margin-left: 50px;
    }
    @media (max-width: 420px) {
        margin-left: 30px;
        & > h1 {
            font-size: 40px;
        }
        & > p {
            width: 100%;
            font-size: 16px;
        }
    }
`;
const WelcomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1.5;

    color: #222222;

    @media (max-width: 1466px) {
        flex: 1;
    }
`;
const AuthSection = styled.div`
    width: 100%;
    height: 100vh;

    position: relative;
    display: flex;
    flex-direction: row;

    overflow: hidden;

    @media (max-width: 990px) {
        height: 100vh;
        flex-direction: column;
    }
`;

const Auth = () => {
    const [authType, setAuthType] = React.useState("signup");
    const [mobileState, toggleMobileState] = React.useState(false);

    const switchAuthType = (type) => {
        setAuthType(type);
    };

    const toggleMobileAuth = () => {
        toggleMobileState(true);
    };

    return (
        <AuthSection>
            <WelcomeContainer>
                <WelcomeInfoContainer>
                    <h1>make your voice heard.</h1>
                    <p>
                        rock the vote connects you with millions, if not
                        gazillions of diverse political viewpoints, allowing you
                        to rate certain viewpoints, and truly contribute your
                        political activism to, as Gavin Belson so tastefully put
                        it, make the world a better place.
                    </p>
                </WelcomeInfoContainer>
                <MobileAuthCTA onClick={toggleMobileAuth}>
                    sign up / login
                </MobileAuthCTA>
            </WelcomeContainer>
            <AuthContainer
                style={mobileState ? { display: "flex", top: "0vh" } : null}
            >
                <TypeSelectContainer>
                    <div>
                        <TypeSelect
                            style={
                                authType === "signup"
                                    ? {
                                          opacity: 1,
                                      }
                                    : {
                                          opacity: 0.5,
                                      }
                            }
                            onClick={() => {
                                switchAuthType("signup");
                            }}
                        >
                            sign up
                        </TypeSelect>
                        <TypeSelect
                            style={
                                authType === "signup"
                                    ? {
                                          opacity: 0.5,
                                      }
                                    : {
                                          opacity: 1,
                                      }
                            }
                            onClick={() => {
                                switchAuthType("login");
                            }}
                        >
                            login
                        </TypeSelect>
                        <TypeSelectSlider
                            style={
                                authType === "signup"
                                    ? { marginLeft: "32px", width: "166px" }
                                    : { marginLeft: "263px", width: "113px" }
                            }
                        />
                    </div>
                </TypeSelectContainer>
                <AuthFormContainer>
                    {authType === "signup" ? (
                        <AuthForm type='signup' />
                    ) : (
                        <AuthForm type='login' />
                    )}
                </AuthFormContainer>
            </AuthContainer>
        </AuthSection>
    );
};

export default Auth;
