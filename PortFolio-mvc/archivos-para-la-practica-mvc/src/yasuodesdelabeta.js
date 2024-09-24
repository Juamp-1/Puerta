const express= require("express");
const path =require ('path')
const app = express();
const indexRoutes = require('./routes/index.routes')
const PORT = 3000;

app.use(express.static(path.join(__dirname, '..', 'public' )))

app.use('/', indexRoutes)

app.listen(PORT, () => console.log("Server running in http://localhost:"+ PORT));

