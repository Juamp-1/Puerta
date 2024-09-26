const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const indexRoutes = require('./routes/index.routes');
const productsRoutes = require('./routes/products.routes')
const usersRoutes = require('./routes/users.routes')

//seteo recursos estáticos
app.use(express.static(path.join(__dirname,'..', 'public')));

//seteo el motor de plantilla
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


app.use('/', indexRoutes);
app.use('/products',productsRoutes)
app.use('/users', usersRoutes);


app.listen(PORT, () => 'Servidor corriendo en http://localhost:' + PORT)