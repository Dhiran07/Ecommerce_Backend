const ProductService = require('../services/product.services')

const getProducts = async(req,res) => {
    const allProductsData = await ProductService.getAllProducts(); //getAllProducts will be defined in services since it is a business logic
    return res.json({
        message: 'Successfully fetched the Products',
        success: true,
        code:200,
        data: allProductsData
    });
}


const getProductsWithCategories = async(req,res) => {
    const allProductsData = await ProductService.getProductsWithCategories(); 
    return res.json({
        message: 'Successfully fetched the Products with its Categories',
        success: true,
        code:200,
        data: allProductsData
    });
}

const createProduct = async(req,res) => {
    const response = await ProductService.createNewProduct(req.body);
return res.json({
   message: 'Successfully created the product',
   success: true,
   code:201,
   data: response
})    
}

const getProductsById = async(req,res) => {
    const response = await ProductService.getProductsById(req.params.id);
return res.json({
   message: 'Successfully fetched the Product',
   success: true,
   code:200,
   data: response
})    
}

const updateProduct = async(req,res) => {
    const response = await ProductService.updateProduct(req.params.id, req.body);
return res.json({
   message: 'Successfully updated the Product',
   success: true,
   code:200,
   data: response
})    
}

const deleteProduct = async(req,res) => {
    const response = await ProductService.deleteProduct(req.params.id);
return res.json({
   message: 'Successfully deleted the Product',
   success: true,
   code:200,
   data: response
})    
}

const getAllProductsByCategoryId = async(req,res) => {
    const response = await ProductService.getAllProductsByCategoryId(req.params.category_id);
return res.json({
   message: 'Successfully fetched the Product by Category ID',
   success: true,
   code:200,
   data: response
})    
}

const getProductsbyCostRange = async(req,res) => {
    const response = await ProductService.getProductsbyCostRange(req.query);
return res.json({
   message: 'Successfully fetched the Product by Cost Range',
   success: true,
   code:200,
   data: response
})    
}












module.exports = {
    getProducts,
    createProduct,
    getProductsById,
    getProductsWithCategories,
    updateProduct,
    deleteProduct,
    getAllProductsByCategoryId,
    getProductsbyCostRange
    //createCategory,
    //getCategoriesById,
    //getCategoriesByName,
    //updateCategory,
    //deleteCategory
}