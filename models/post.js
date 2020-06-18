const mongoose = require("mongoose");
const commentSchema = require("./comment.js");

const Schema = mongoose.Schema;

const postSchema = new Schema({
    authorID: {
        type: Schema.Types.ObjectId,
        ref: "Author",
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    postDate: {
        type: Date,
        default: Date.now,
    },
    postBody: {
        type: String,
        required: true,
    },
    imgSrc: {
        type: String,
        required: false,
        default: "",
    },
    upvotes: {
        type: Number,
        default: 0,
    },
    downvotes: {
        type: Number,
        default: 0,
    },
    comments: [{ type: Schema.Types.ObjectId, ref: "comment" }],
});

module.exports = mongoose.model("Post", postSchema);
