import express from 'express';

const app = express();

app.get('/users',(request, response) =>{
  console.log("listagem de usuarios");

  response.json([
    'Henrique',
    'Diego',
    'Daniel',
    'cleiton',
    'Miguel'
  ]);
});

app.listen(3333);