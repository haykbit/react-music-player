const express = require("express");
const helmet = require("helmet");
const { json } = require("body-parser");
const cors = require("cors");

const { config } = require("./config");

const { userRouter } = require("./routes");

const app = express();

app.use(helmet());
app.use(json());
/* app.use(
  cors({
    origin: config.client.URL,
  })
); */

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.status(200).send({
    data: "root page!",
  });
});

module.exports = app;
