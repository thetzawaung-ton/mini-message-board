const { Router } = require("express");

const newFormRouter = Router();

newFormRouter.get("/", (req, res) => {
  res.render("form", { title: "Create new message" });
});

module.exports = newFormRouter;
