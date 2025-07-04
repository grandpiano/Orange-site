const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/jobs", require("./routes/jobs"));
app.use("/api/dashboard", require("./routes/dashboard"));

app.listen(5000, () => console.log("Server running on port 5000"));
