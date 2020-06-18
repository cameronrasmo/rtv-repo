import React from "react";
import styled from "styled-components";
import { AuthContext } from "../../AuthContext.js";
import { PostContext } from "../../PostContext.js";
import exit from "../../img/exitButton.svg";
import deleteIcon from "../../img/delete.svg";

const DeleteButton = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;

    & > button {
        height: 80%;
        width: 80%;
        padding-left: 5px;
        padding-right: 5px;
        border-radius: 5px;
        border: none;
        cursor: pointer;

        background-color: #222222;

        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;

        & > img {
            width: 50%;
            height: 50%;
        }

        &:hover {
            background-color: #f2f2f225;
        }

        &:active {
            background-color: #111111;
        }
    }
`;
const Overlay = styled.div`
    width: 100%;
    height: 100vh;

    position: fixed;
    top: 0px;
    left: 0px;
    background-color: #222222;
    display: none;
    opacity: 0;
    z-index: 1;
`;
const CTAContainer = styled.div`
    height: 100px;
    position: relative;
    display: flex;
    flex-direction: space-between;
    align-items: center;
    justify-content: center;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    & > button {
        /* position: absolute;
        right: 0px;
        bottom: 0px; */

        border: 2px solid red;
        width: 150px;
        height: 80%;
        border-radius: 5px;
        background: linear-gradient(#b1f0d2, #a6fffa);
        font-size: 20px;
        flex: 1;
        margin-left: 5px;

        color: #222222;
        cursor: pointer;
        outline: none;
        border: none;
        transition: 0.2s;
    }

    & > button:hover {
        background: linear-gradient(0.25turn, #b1f0d2, #a6fffa);
    }

    & > button:active {
        opacity: 0.9;
        transition: 0s;
    }

    @media (max-width: 990px) {
        padding-left: 10px;
        padding-right: 10px;
        & > button {
            width: 75px;
            font-size: 15px;
            font-weight: 600;
        }
    }
`;
const ImgUrl = styled.div`
    /* position: absolute;
    bottom: 0px;
    left: 0px; */

    flex: 1;
    padding-right: 10px;
    padding-left: 0px;
    & > input {
        color: #f2f2f2;
        width: 100%;
        margin-top: 5px;
        padding: 5px;

        background-color: #222222;
        border-radius: 5px;
        font-size: 16px;

        border: 3px solid #f5f5f540;
        outline: none;
        transition: 0.2s;
        transition-timing-function: cubic-bezier(0, 0, 0.05, 1);
    }

    & > input:focus {
        border: 3px solid #b1f0d2;
    }

    & > label {
        color: #f2f2f2;
        font-size: 14px;
    }

    @media (max-width: 990px) {
        & > input {
            margin-top: 10px;
        }
    }
`;
const PostBodyContainer = styled.div`
    color: #e2e2e2;
    font-size: 18px;
    font-weight: 400;
    flex: 1;
    padding: 30px;
    padding-top: 30px;

    & > textarea {
        width: 100%;
        min-height: 100%;
        padding: 10px;

        margin: auto;
        border: 3px solid #f5f5f540;
        font-size: 16px;

        color: #f2f2f2;
        background: none;
        border-radius: 5px;
        outline: none;
        resize: none;
        transition: 0.2s;
        transition-timing-function: cubic-bezier(0, 0, 0.05, 1);
    }

    & > textarea:focus {
        border: 3px solid #b1f0d2;
    }

    @media (max-width: 990px) {
        padding: 15px;
        font-size: 18px;
    }
`;
const PostContentContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    line-height: 1.5;
    flex: 3;
    background-color: #111111;

    position: relative;
`;
const HeaderContainer = styled.div`
    padding-top: 100px;
    padding-left: 30px;
    padding-right: 30px;
    overflow: hidden;
    position: relative;
    top: 0px;
    width: 100%;
    border-radius: 5px 5px 0px 0px;

    background-color: #222222;

    transition: 0.2s;
    transition-timing-function: cubic-bezier(0, 0, 0.05, 1);

    & > h3 {
        position: relative;
        bottom: 0px;
        padding-bottom: 20px;
        width: 50%;
        color: #f2f2f2;

        font-weight: 500;
    }

    & > input {
        position: relative;
        top: 3px;

        width: 100%;
        border: none;
        border-bottom: 3px solid #f5f5f540;
        border-radius: 0px;
        background: none;
        outline: none;
        font-size: 40px;
        font-weight: 600;
        color: #f2f2f2;
    }

    & > input:focus ~ hr {
        width: 100%;
    }

    & > hr {
        width: 0%;
        height: 3px;

        position: relative;
        top: 0px;

        border: none;
        background-color: #b1f0d2;

        transition: 0.3s;
        transition-timing-function: cubic-bezier(0, 0, 0.05, 1);
    }

    & > button {
        width: 75px;
        height: 50px;
        background-color: #f2f2f2;
        border: none;

        position: absolute;
        top: 0px;
        right: 0px;
        outline: none;

        cursor: pointer;
    }

    & > button > img {
        width: 25px;
    }

    & > button:hover {
        background-color: #e5e5e5;
    }

    & > button:active {
        background-color: #222222;
        color: #f5f5f5;
        & > img {
            filter: invert(1);
        }
    }

    @media (max-width: 990px) {
        border-radius: 5px 5px 0px 0px;
        padding-top: 50px;
        padding-left: 15px;
        padding-right: 15px;

        width: 100%;

        & > h3 {
            font-size: 15px;
            padding-bottom: 0px;
        }
        & > input {
            font-size: 25px;
        }
        & > hr {
        }
    }
`;
const PostContainer = styled.div`
    width: 50%;
    margin: auto;
    min-height: 70vh;
    margin-top: 150px;
    margin-bottom: 150px;
    display: flex;
    flex-direction: column;
    left: -20px;
    opacity: 0;
    border-radius: 5px;
    border: 1px solid black;

    position: relative;

    background-color: #222222;

    box-shadow: 0px 20px 20px 0px #22222250;
    z-index: 2;

    transition: 0.2s;
    transition-timing-function: cubic-bezier(0, 0, 0.05, 1);

    @media (max-width: 1500px) {
        width: 90%;
    }

    @media (max-width: 990px) {
        width: 95%;
    }
`;
const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: none;
    align-items: center;

    position: fixed;
    top: 0px;
    left: 0px;

    z-index: 1;

    @media (max-width: 990px) {
        position: fixed;
    }
`;

const AddEditPanel = (props) => {
    const {
        setEdit,
        editToggle,
        addPanelToggle,
        addToggle,
        type,
        title,
        postBody,
        imgSrc,
        id,
    } = props;

    const initState = {
        title: title || "",
        postBody: postBody || "",
        imgSrc: imgSrc || "",
    };
    const [postState, setPostState] = React.useState(initState);
    const authContext = React.useContext(AuthContext);
    const postContext = React.useContext(PostContext);
    const { userState } = authContext;
    const postRef = React.useRef(null);
    const overlayRef = React.useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setPostState((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };
    const submit = () => {
        if (postState.title !== "" && postState.postBody !== "") {
            if (type === "add") {
                postContext.submitPost(postState);
                addToggle();
                setPostState(initState);
            } else {
                postContext.editPost(postState, id);
                setEdit();
            }
        }
    };

    const deletePost = (id) => {
        postContext.deletePost(id);
        setEdit();
    };

    React.useEffect(() => {
        if (addPanelToggle || editToggle) {
            postRef.current.style.left = "0px";
            postRef.current.style.opacity = 1;
            overlayRef.current.style.display = "flex";
            overlayRef.current.style.opacity = 0.8;
        }
        return () => {
            postRef.current.style.left = "-20px";
            postRef.current.style.opacity = 0;
            overlayRef.current.style.display = "none";
            overlayRef.current.style.opacity = 0;
            postContext.getAllPosts();
        };
    }, [addPanelToggle, editToggle]);

    return (
        <>
            <Overlay ref={overlayRef} />
            <Container
                style={
                    type === "add"
                        ? addPanelToggle
                            ? { display: "flex" }
                            : { display: "none" }
                        : editToggle
                        ? { display: "flex" }
                        : { display: "none" }
                }
            >
                <PostContainer ref={postRef}>
                    <HeaderContainer>
                        <button onClick={type === "add" ? addToggle : setEdit}>
                            <img src={exit} alt='exit comments' />
                        </button>
                        <h3>
                            from <strong>{userState.user.username}</strong>
                        </h3>
                        <input
                            placeholder='title'
                            name='title'
                            value={postState.title}
                            onChange={handleChange}
                        />
                        <hr />
                    </HeaderContainer>
                    <PostContentContainer>
                        <PostBodyContainer>
                            <textarea
                                placeholder="write what's on your mind"
                                value={postState.postBody}
                                name='postBody'
                                onChange={handleChange}
                            />
                        </PostBodyContainer>
                    </PostContentContainer>
                    <CTAContainer>
                        <ImgUrl>
                            <label>Type an image URL</label>
                            <input
                                type='text'
                                onChange={handleChange}
                                name='imgSrc'
                                value={postState.imgSrc}
                            />
                        </ImgUrl>
                        {editToggle ? (
                            <DeleteButton>
                                <button
                                    onClick={() => {
                                        deletePost(id);
                                    }}
                                >
                                    <img src={deleteIcon} />
                                </button>
                            </DeleteButton>
                        ) : null}
                        <button onClick={submit}>submit</button>
                    </CTAContainer>
                </PostContainer>
            </Container>
        </>
    );
};

export default AddEditPanel;
