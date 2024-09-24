const path = require('path');


module.exports ={
    list: (req,res) => {res.sendFile(path.join(__dirname, 'views','products.html'))},

    details :(req,res) => {res.sendFile(path.join(__dirname, 'views','products-details.html'))},

};

