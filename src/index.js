const express = require("express");
const morgon = require("morgan");
const helmet = require("helmet");
const middleWares = require("./middlewares");

const app = express();

app.get("/", (req, res) => {
  res.json("Hello world");
});

app.use(middleWares.four0FourMiddleWare);
app.use(middleWares.otherErrorMiddleware);

const port = process.env.PORT || 1024;
app.listen(port, () => {
  console.log(`Running on ${port}`);
});
