const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.post("/login", (req, res) => {
  const { email, senha } = req.body;
});
