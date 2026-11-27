const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const newFormRouter = require("./routes/newFormRouter");

const app = express();
const PORT = process.env.PORT || 4000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/new", newFormRouter);
app.use("/", indexRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
})

app.listen(PORT, () => {
  console.log(`Running app in port ${PORT}`);
});
