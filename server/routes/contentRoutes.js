const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const {
  homeStartingContent,
  aboutContent,
  contactContent,
} = require("../data/content");

//        POST EXEMPLO PADRAO TESTE
const posts = [
  { _id: "1", title: "Post 1", body: "Lorem ipsum dolor sit amet..." },
];

//                  ROTAS FIXAS
router.get("/home", (req, res) => {
  res.json({ content: homeStartingContent });
});

router.get("/about", (req, res) => {
  res.json({ content: aboutContent });
});

router.get("/contact", (req, res) => {
  res.json({ content: contactContent });
});

//                     CRIAR NOVO POST
router.post("/posts", async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (err) {
    console.error("Erro ao criar post:", err);
    res.status(500).json({ error: "Erro ao criar post" });
  }
});

router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar posts" });
  }
});

//                    BUSCAR POR ID
router.get("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post) res.json(post);
    else res.status(404).json({ error: "Post não encontrado" });
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar post" });
  }
});

//                     EDITAR POST

router.put("/posts/:id", async (req, res) => {
  try {
    const updatePost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        body: req.body.body,
      },
      { new: true }
    );
    res.json(updatePost);
  } catch (err) {
    console.log("Erro ao digita no post", err);
    res.status(500).json({ error: "erro ao editar post" });
  }
});

//                  DELETAR POST
router.delete("/posts/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: "Post deletado com sucesso" });
  } catch (err) {
    console.error("Erro ao deletar post:", err);
    terminal;
    res.status(500).json({ error: "Erro ao deletar post" });
  }
});

module.exports = router;
