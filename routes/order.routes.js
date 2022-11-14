const OrderController = require('../controllers/order.controller');
const AuthenticationMiddleware = require('../middleware/authentication.validator')

const routes =(app) => {
    app.post('/ecomm/api/v1/addProduct',AuthenticationMiddleware.isAuthenticated, OrderController.addProduct);

    //to remove products from order
    app.patch('/ecomm/api/v1/removeProduct',AuthenticationMiddleware.isAuthenticated, OrderController.removeProduct);

}


module.exports = routes;
