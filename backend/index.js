const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const itemRouter = require("./routes/items");

const PORT = 3000;

const app = express();

dotenv.config();
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("connected to db"))
    .catch((e) => console.log(e));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/api/items", itemRouter);

app.listen(process.env.PORT || PORT, () => console.log("Server listening on port: " + process.env.PORT))