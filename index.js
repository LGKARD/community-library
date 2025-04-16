import express from 'express';
const app = express();

app.use(express.json());


const users = []

app.post('/users', (req, res) => {
    const body = req.body
    users.push(body)
    res.status(201).send("Usuário criado com sucesso")
});
app.get('/users', (req, res) => {
    res.send({users})
})
//Metodo => GET, POST, PUT, DELETE
//Nome da rota => /hello
// Callback =>  Onde executamos o backend



app.listen(3000, () => console.log('Example app listening on port 3000!'));