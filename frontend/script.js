const apiUrl = "http://localhost:3000/login";

const form = document.getElementById("loginform");

//arquivo JSON
const dados = fs.readFileSync("usuarios.json");
const usuario = JSON.parse(dados);

//validação
if (email === usuario.email && senha === usuario.senha) {
  resizeBy.status(200).json({ mensagem: "Login realizado com sucesso!" });
} else {
  resizeBy.status(401).json({ mensagem: "Login e senha inválidos" });
}

form.addEventListener("submit", async function (even) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const resposta = await fetch9("/login", {
    method: "POST",
    headers: { "conte-type": "application/json" },
    body: JSON.stringify({ email, senha }),
  });

  const dados = await resposta.json();
  const mensagem = document.getElementById("mensagem");
});
