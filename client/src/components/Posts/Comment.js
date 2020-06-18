import React from "react";
import { PostContext } from "../../PostContext.js";

const Comment = (props) => {
    const { comment, authorID } = props;
    const [commentAuthor, setCommentAuthor] = React.useState("");
    const { userAxios } = React.useContext(PostContext);

    const getCommentAuthor = (authorID) => {
        userAxios
            .get(`/api/posts/comment/author/${authorID}`)
            .then((res) => setCommentAuthor(res.data.username))
            .catch((err) => console.log(err));
    };

    React.useEffect(() => {
        getCommentAuthor(authorID);
        // eslint-disable-next-line
    }, []);

    return (
        <div style={{ marginTop: "5px", marginBottom: "5px" }}>
            <p>
                <strong>{commentAuthor}</strong>: {comment}
            </p>
        </div>
    );
};

export default Comment;
