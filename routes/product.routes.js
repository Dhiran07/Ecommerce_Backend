const ProductController = require('../controllers/product.controller')
const ProductMiddleware = require('../middleware/product.validator')
const AuthenticationMiddleware = require('../middleware/authentication.validator')

//this function will have routes of products API
const routes = (app) => {

//to get all the products
app.get('/ecomm/api/v1/products', ProductController.getProducts)

//to get all the products with categories
app.get('/ecomm/api/v1/productsWithCategories', ProductController.getProductsWithCategories)

//to create a new Product
app.post('/ecomm/api/v1/products',AuthenticationMiddleware.isAuthenticated,AuthenticationMiddleware.checkAdminOrSeller, ProductMiddleware.validateCreateProduct, ProductController.createProduct)

//to get a all Products by Product ID
app.get('/ecomm/api/v1/products/:id', ProductController.getProductsById)

//to update a Product by ID
app.put('/ecomm/api/v1/products/:id',AuthenticationMiddleware.isAuthenticated, AuthenticationMiddleware.checkAdminOrSeller, ProductController.updateProduct)

//to delete a Product by ID
app.delete('/ecomm/api/v1/products/:id',AuthenticationMiddleware.isAuthenticated, AuthenticationMiddleware.checkAdminOrSeller, ProductController.deleteProduct)

//to get all Products by  Category ID
app.get('/ecomm/api/v1/products/cat/:category_id', ProductController.getAllProductsByCategoryId)

//to get all Products by Cost Range
app.get('/ecomm/api/v1/productsbyCostRange/', ProductController.getProductsbyCostRange)


}

module.exports = routes;