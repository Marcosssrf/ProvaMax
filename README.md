# Prova tipo 1 LING PROGRAM P/ INTERNET 

Marcos Rodrigues Fernandes - 5166265

Aplicação web simples de login e registro de usuários, com frontend em HTML/CSS/JS e backend em Node.js com Express.

## Estrutura

```
ProvaMax/
├── index.html       # Página de login
├── register.html    # Página de registro
├── styles.css       # Estilos
├── script.js        # Lógica do frontend
└── backend/
    ├── server.js    # Servidor Express
    └── package.json
```

## Como rodar

### Backend

```bash
cd backend
node server.js
```

O servidor sobe em `http://localhost:3000`.

> Se ainda não tiver as dependências instaladas, rode `npm install` antes.

### Frontend

Abra o arquivo `index.html` diretamente no navegador, ou sirva com um servidor estático de sua preferência.

## Endpoints da API

| Método | Rota        | Descrição                        |
|--------|-------------|----------------------------------|
| POST   | `/login`    | Autentica um usuário             |
| POST   | `/register` | Cadastra um novo usuário         |
| GET    | `/find`     | Lista todos os usuários          |

### Exemplo de payload

```json
{
  "username": "marcos",
  "password": "123"
}
```

## Usuário padrão

O servidor já vem com um usuário pré-cadastrado:

- **Username:** `marcos`
- **Password:** `123`

> ⚠️ Os dados são armazenados em memória — tudo é perdido ao reiniciar o servidor.
