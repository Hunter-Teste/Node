const express = require('express');
const app = express();
const port = 3000 || process.env.port;	

app.get("/", (req, res) => {
  res.send("Hello World!");
})

app.use(express.json());
const user= []
app.post('/gravar', (req, res) => {
  const jsonData = req.body;
  console.log('teste recebidos:', jsonData);
  user.push(jsonData);
  res.json(user);
});

app.get("/gravar", (req, res)=>{
  res.json(user)
})

app.listen(port, () => {
  console.log(`Servidor na porta http://localhost:${port}`);
});