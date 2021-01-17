const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const expressJwt = require("express-jwt");
require("dotenv").config();
const path = require("path");
const port = process.env.PORT || 5000;
const secret = process.env.SECRET || "yes haha funny joke";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "client", "build")));
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/rtvDB",
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log("Connected to MongoDB");
    }
);
app.use("/auth", require("./routes/authRouter.js"));
app.use("/api", expressJwt({ secret: secret, algorithms: ['RS256'] }));
app.use("/api/users", require("./routes/authRouter"));
app.use("/api/posts", require("./routes/postRouter"));
app.use((err, req, res, next) => {
    if (err.name === "UnauthorizedError") {
        res.status(err.status);
    }
    return res.send({ errMsg: err.message });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
    console.log(`Connected to port ${port}`);
});
