const joi = require('joi');

const CreateUserSchema= (user) =>{
    const Schema = joi.object().keys({
        name: joi.string().min(3).max(8).required(),
        email: joi.string().email().min(5).max(20).required(),
        password: joi.string().min(3).max(8).required()
    })
    return Schema.validate(user);
}
module.exports = CreateUserSchema;