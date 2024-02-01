const express = require('express')
const app = express()

app.use(express.json());

const users = [
  {
    id: 1,
    name: "Luiz",
    age: 23,
    height: 1.84,
    weight: 75
  },
  {
    id: 2,
    name: "Akhenaton",
    age: 21,
    height: 1.80,
    weight: 69
  },
  {
    id: 3,
    name: "Gabriela",
    age: 19,
    height: 1.64,
    weight: 61
  },
  {
    id: 4,
    name: "Volmir",
    age: 41,
    height: 1.79,
    weight: 75
  },
]


// CREATE
app.post('/users', (req,res) => {
  // user para adicionar um usuario novo no array users
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json({"status": 201, "data": newUser, "message": "User created successfully"})
});

// READ ALL
app.get('/users', (req, res) => {
  // retornar o array users
  res.status(200).json({"status": 200, "data": users})
});

// READ BY ID
app.get('/users/:id', (req, res) => {
  // retornar o usuário de acordo com o id 
  const userId = req.params.id;
  
  res.status(200).json({"status": 200, "data": users})
});

// UPDATE
app.put('/users/:id', (req,res) => {
  // atualizar completamente o usuario através do id
  res.send('Update an entire data!')
});

// UPDATE
app.patch('/users/:id', (req,res) => {
  // atualizar parcialmente um usuario através do id
  res.send('Update partially some date!')
});


// DELETE
app.delete('/users/:id', (req,res) => {
  // remover do array o usuário especificado pelo id
  res.send('Delete some data!')
});
 
app.listen(3000, () => console.log('Express server currently running on port 3000'));
