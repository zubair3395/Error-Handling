require("dotenv").config();
const jwt = require('jsonwebtoken');
 const privateKey = process.env.JWT_SECRET_KEY;

  const AuthencationUser = ({email, password,name}) => jwt.sign({email,password,name}, privateKey)

  const verifyToken = (token) => jwt.verify(token, privateKey);


  module.exports = {
    AuthencationUser, verifyToken
  }
