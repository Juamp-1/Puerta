const path = require('path')
const data =[
    {
        id : 1,
        title : "products-01",
        descriptin : "lorem ipsum dolor sit amet",
        photo : "img-photo-01.jpg"

    },
    {
        id : 1,
        title : "products-01",
        descriptin : "lorem ipsum dolor sit amet",
        photo : "img-photo-01.jpg"

    },
    {
        id : 1,
        title : "products-01",
        descriptin : "lorem ipsum dolor sit amet",
        photo : "img-photo-01.jpg"

    },
    {
        id : 1,
        title : "products-01",
        descriptin : "lorem ipsum dolor sit amet",
        photo : "img-photo-01.jpg"

    },
    {
        id : 1,
        title : "products-01",
        descriptin : "lorem ipsum dolor sit amet",
        photo : "img-photo-01.jpg"

    },
    {
        id : 1,
        title : "products-01",
        descriptin : "lorem ipsum dolor sit amet",
        photo : "img-photo-01.jpg"

    },
]

module.exports = {
    index : (req,res) => {
        return res.render('home')
    
    },
    admin : (req,res) => {
        return res.render('admin')
   
    }
}