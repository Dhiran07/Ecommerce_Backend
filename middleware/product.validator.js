const validateCreateProduct = (req, res, next) =>{
    if(!req.body.name | !req.body.category_id){
        return res.status(400).json({
            message: 'Product name or category_id is missing, please try again by adding a product name & category_id',
            success: false,
            err: 'name & category_id parameter is missing in the request body',
            data: {}
        })
    }
    next();
}

module.exports = {validateCreateProduct}