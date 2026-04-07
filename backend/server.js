const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

let usuarios = [{ id: 1, username: "marcos", password: "123" }];

app.post("/login", (req, res) => {
    console.log("req.body:", req.body);
    const { username, password } = req.body;

    if (!username || !password || username.includes(";") || password.includes(";")) {
        return res.status(400).json({ erro: "Nome de usuário e senha são obrigatórios" });
    }

    usuarios.find((usuario) => {
        if (usuario.username === username && usuario.password === password) {
            return res.status(200).json({ message: "Login bem-sucedido", username: usuario.username });
        }

        res.status(401).json({ erro: "Credenciais inválidas" });
    });
});

app.post("/register", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password || username.includes(";") || password.includes(";")) {
        return res.status(400).json({ erro: "Nome de usuário e senha são obrigatórios" });
    }

    if (usuarios.some((usuario) => usuario.username === username)) {
        return res.status(400).json({ erro: "Nome de usuário já existe" });
    }

    const usuario = {
        id: usuarios.length + 1,
        username, password
    };

    usuarios.push(usuario);
    res.status(201).json({ message: "Usuário registrado com sucesso", username: usuario.username });
});

app.get("/find", (req, res) => {
    res.json(usuarios);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});