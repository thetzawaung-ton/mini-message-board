const { Router } = require("express");
const customNotFoundError = require("../errors/customNotFoundError");

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

indexRouter.get("/messages/:id", (req, res) => {
  const messageId = req.params.id;
  const message = messages[messageId - 1];
  if(!message) {
    throw new customNotFoundError("Message not found");
  }
  res.render("message", {
    message: message,
    title: `Message ${messageId}`,
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

indexRouter.get("/*splat", (req, res) => {
  throw new customNotFoundError("Page not found");
})

module.exports = indexRouter;
