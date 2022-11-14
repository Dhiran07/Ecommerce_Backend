const authService = require("../services/auth.services");
const roleService = require('../services/role.services');
const authHelperService = require("../services/auth-helper.service");

const isAuthenticated = async (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    //whn user is not sending a token
    return res.json({
      status: 401,
      message: "JWT token is missing",
      data: {},
      err: "Invalid or missing argument in request header",
    });
  }
  const response = authService.verifyToken(token);
  if (!response) {
    //whn user is not sending a token
    return res.json({
      status: 401,
      message: "Invalid JWT token",
      data: {},
      err: "Invalid auth details",
    });
  }

  const user = await authHelperService.getUserByEmail(response.email);
  if (!user) {
    return res.json({
      status: 401,
      message: "JWT token sent for an Invalid User",
      data: {},
      err: "Invalid Credentials",
    });
  }

  req.user = user; // This is done to use the "user" in later part of the code wherever it is required
  next();
};

const checkAdmin = async(req, res, next) =>{
  const user =  req.user;
  const adminRole = await roleService.getRoleByName('admin');
  const isAdmin =  await user.hasRole(adminRole);
  if(!isAdmin){
      return res.json({
          status: 401,
          message: "User is not admin",
          data: {},
          err: 'Not authorized'
      });
  }

  next();
}

const checkAdminOrSeller = async(req, res, next) =>{
  const user =  req.user;
  const adminRole = await roleService.getRoleByName('admin');
  const sellerRole = await roleService.getRoleByName('seller');
  const isAdmin =  await user.hasRole(adminRole);
  const isseller =  await user.hasRole(sellerRole);
  if(!isAdmin && !isseller){
      return res.json({
          status: 401,
          message: "User is not authorized",
          data: {},
          err: 'Not authorized'
      });
  }

  next();
}

module.exports = { isAuthenticated, checkAdmin, checkAdminOrSeller };


//hasRole is a mixins -sequelize function