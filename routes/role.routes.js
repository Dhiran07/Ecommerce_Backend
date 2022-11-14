const AuthenticationMiddleware = require('../middleware/authentication.validator')
const roleController = require('../controllers/role.controller')



const routes = (app) => {
    /* route for adding roles */
    app.post('/ecomm/api/v1/role', AuthenticationMiddleware.isAuthenticated, AuthenticationMiddleware.checkAdmin, roleController.addRoleToUser);

    /* route for removing roles */
    app.delete('/ecomm/api/v1/role', AuthenticationMiddleware.isAuthenticated, AuthenticationMiddleware.checkAdmin, roleController.removeRoleFromUser);
}

module.exports = routes;