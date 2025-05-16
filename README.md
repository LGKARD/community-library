# Community Library

Projeto de uma biblioteca comunitária onde os usuários podem postar livros para compartilhar com outros membros e também emprestar livros disponíveis na comunidade.

## 📌 Descrição

Este projeto consiste em um sistema backend desenvolvido com Node.js e Express para gerenciar livros, usuários e empréstimos em uma biblioteca comunitária. O sistema oferece autenticação via JWT, validação de dados com Zod, e armazenamento persistente utilizando SQLite. Ideal para fomentar o compartilhamento de livros em comunidades locais.

## ⚙️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express.js**: Framework para criação da API RESTful.
- **SQLite**: Banco de dados leve e embutido.
- **JSON Web Tokens (JWT)**: Autenticação e segurança.
- **Zod**: Validação de esquemas de dados.
- **dotenv**: Gerenciamento de variáveis de ambiente.

## 🚀 Como Utilizar Localmente

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/LGKARD/community-library.git
   ```

2. **Acesse a pasta do projeto:**

   ```bash
   cd community-library
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Crie um arquivo `.env` na raiz do projeto e defina as variáveis de ambiente:**

   ```
   PORT=3000
   SECRET=your_jwt_secret
   ```

   Substitua `your_jwt_secret` por uma chave secreta para assinatura dos tokens JWT. Você pode gerar uma chave segura com:

   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

5. **Inicie o servidor:**

   ```bash
   npm start
   ```

6. **O servidor estará disponível em:**

   ```
   http://localhost:3000
   ```

## ⚠️ Observações

- O banco de dados SQLite será criado automaticamente na primeira execução.
- Use ferramentas como Postman para testar as rotas da API.
- Certifique-se de ter o Node.js instalado (versão 14 ou superior recomendada).


