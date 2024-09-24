const express = require("express");
const path = require("path")
const app = express();
const PORT = 3030;
app.use(express.static(path.join(__dirname,'public')))

app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`)});

app.get('/',(req,res) => { return res.sendFile(path.join(__dirname,"views", "index.html"))} )
app.get('/babbage',(req,res) => { return res.sendFile(path.join(__dirname,"views", "babbage.html"))} )
app.get('/berners-lee',(req,res) => { return res.sendFile(path.join(__dirname,"views", "barners-lee.html"))} )

/*nunca vamos a utilizar el num de la h por cuestiones esteticas, para estilizar utilizaremos CSS*/