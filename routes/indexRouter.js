const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
  });
});

indexRouter.get("/:id", (req, res) => {
  const messageId = req.params.id;
  console.log(messageId);
  res.render("message", {
    message: messages[messageId - 1],
  });
});

indexRouter.post("/new", (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.username,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = indexRouter;
