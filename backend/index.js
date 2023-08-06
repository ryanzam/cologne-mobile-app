const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const itemRouter = require("./routes/items");
const authRouter = require("./routes/authenticate");
const userRouter = require("./routes/user");
const basketRouter = require("./routes/basket");
const orderRouter = require("./routes/order");

const PORT = 3000;

const app = express();

dotenv.config();
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("connected, server running on http://localhost:3000"))
    .catch((e) => console.log(e));

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/api/items", itemRouter);
app.use("/api/", authRouter);
app.use("/api/users", userRouter);
app.use("/api/basket", basketRouter);
app.use("/api/orders", orderRouter);

app.listen(process.env.PORT || PORT, () => console.log("Server listening on port: " + process.env.PORT))