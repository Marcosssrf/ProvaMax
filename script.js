const API_URL = "http://localhost:3000";

async function login(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    let response;
    try {
        response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });
    } catch (error) {
        console.error("Erro ao conectar com o servidor:", error);
        alert("Erro ao conectar com o servidor.");
        return;
    }

    const resultEl = document.querySelector("p#result, p#erro");

    if (response.ok) {
        const data = await response.json();
        resultEl.id = "result";
        resultEl.textContent = `Bem-vindo, ${data.username}!`;
    } else {
        const errorData = await response.json();
        resultEl.id = "erro";
        resultEl.textContent = `Erro: ${errorData.erro}`;
    }
}

async function register(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    let response;
    try {
        response = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });
    } catch (error) {
        console.error("Erro ao conectar com o servidor:", error);
        alert("Erro ao conectar com o servidor.");
        return;
    }

    if (response.ok) {
        const data = await response.json();
        alert(`Usuário ${data.username} registrado com sucesso!`);
        window.location.href = "index.html";
    } else {
        const errorData = await response.json();
        const resultEl = document.querySelector("p#result, p#erro");
        resultEl.id = "erro";
        resultEl.textContent = `Erro: ${errorData.erro}`;
    }
}