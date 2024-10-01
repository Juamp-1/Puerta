const {getData} = require('../data')
const products = getData("products.json")

module.exports = {
    list : (req,res) => {
        return res.render('products')

    },
    detail : (req,res) => {

        const {products_id} = req.params
        const products = products.find(products => products.id === + products_id)

        return res.render('product-detail',{
            ...product
        })
    }
}