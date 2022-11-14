const CategoryController = require('../controllers/category.controller');
const CategoryMiddleware = require('../middleware/category.validators');
const AuthenticationMiddleware = require('../middleware/authentication.validator')

const routes = (app) => { 
    //to get all the categories
    app.get('/ecomm/api/v1/categories', CategoryController.getCategories)

    //to create a new Category
    app.post('/ecomm/api/v1/categories',AuthenticationMiddleware.isAuthenticated,AuthenticationMiddleware.checkAdminOrSeller, CategoryMiddleware.validateCreate, CategoryController.createCategory)

     //to get a all Categories by ID
    app.get('/ecomm/api/v1/categories/:id', CategoryController.getCategoriesById)

     //to get all Categories by Name
    app.get('/ecomm/api/v1/categoriesByName/', CategoryController.getCategoriesByName)

    //to update Categories by id & Data
    app.put('/ecomm/api/v1/categories/:id',AuthenticationMiddleware.isAuthenticated,AuthenticationMiddleware.checkAdminOrSeller, CategoryController.updateCategory)

    //to delete Categories by id & Data
    app.delete('/ecomm/api/v1/categories/:id',AuthenticationMiddleware.isAuthenticated,AuthenticationMiddleware.checkAdminOrSeller, CategoryController.deleteCategory)

    }


    module.exports = routes;