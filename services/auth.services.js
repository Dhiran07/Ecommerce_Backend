const { User, Role} = require("../models/index");
const roleService = require('../services/role.services')
const bcrypt = require("bcryptjs");

var jwt = require("jsonwebtoken");
require("dotenv").config();

const signup = async(data) => {
  try{
      const user = await User.create({
        username: data.username,
        email: data.email,
        password: data.password,
  });

  const customerRole = await roleService.getRoleByName('customer');

  //console.log("*******",user);
  //console.log(customerRole);
  // assigning customer role while signup as default
  await user.addRole(customerRole);
  //console.log("========",user)
  return user;
  } 
  catch(err){
    console.log(err);
  };
}

const verifyPassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};

const verifyToken = (token) => {
  try {
    const response = jwt.verify(token, process.env.JWT_SECRET_KEY);
    return response;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  signup,
  verifyPassword,
  verifyToken,
};
