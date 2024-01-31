const express = require('express')
const app = express()

const users = [
  {
    name: "Luiz",
    age: 23,
    height: 1.84,
    weight: 75
  },
  {
    name: "Akhenaton",
    age: 21,
    height: 1.80,
    weight: 69
  },
  {
    name: "Gabriela",
    age: 19,
    height: 1.64,
    weight: 61
  },
  {
    name: "Volmir",
    age: 41,
    height: 1.79,
    weight: 75
  },
]


// CREATE
app.post('/users', (req,res) => {
  res.send('Create something!')
});

// READ
app.get('/users', (req, res) => {
  res.status(200).json({"status": 200, "data": users})
});

// UPDATE
app.put('/users', (req,res) => {
  res.send('Update an entire data!')
});

// UPDATE
app.patch('/users', (req,res) => {
  res.send('Update partially some date!')
});


// DELETE
app.delete('/users', (req,res) => {
  res.send('Delete some data!')
});
 
app.listen(3000, () => console.log('Express server currently running on port 3000'));
