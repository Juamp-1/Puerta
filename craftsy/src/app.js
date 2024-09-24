const path = require('path');
const express = require('express');
const PORT = 3000;
const app = express();

const indexRoutes = require('./routes/index.routes')

const productRoutes = require('./routes/products.routes')

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', indexRoutes);
app.use('/products', productRoutes);


app.get('/admin', (req,res) => res.sendFile(path.join(__dirname, 'views','admin.html')));

app.get('/login', (req,res) => res.sendFile(path.join(__dirname, 'views','login.html')));

app.get('/product-details', (req,res) => res.sendFile(path.join(__dirname, 'views','product-details.html')));

app.get('/products');

app.get('/profile', (req,res) => res.sendFile(path.join(__dirname, 'views','profile.html')));

app.get('/register', (req,res) => res.sendFile(path.join(__dirname, 'views','register.html')));


app.listen(PORT, () => console.log('Server running in http://localhost:' + PORT))
