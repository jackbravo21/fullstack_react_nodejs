

const Joi = require('joi');

// Esquema para criação de produtos
const createProductSchema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    price: Joi.number().min(0).required(),
    description: Joi.string().max(500).optional(),
    type: Joi.string().valid('electronic', 'furniture', 'clothing').required()
});

// Esquema para edição de produtos (alguns campos opcionais)
const editProductSchema = Joi.object({
    name: Joi.string().min(3).max(255).optional(),
    price: Joi.number().min(0).optional(),
    description: Joi.string().max(500).optional(),
    type: Joi.string().valid('electronic', 'furniture', 'clothing').optional()
});

module.exports = {
    checkLoginSchema,
    registerSchema,
    editUserSchema,
    deleteUserSchema,
    getOneSchema,
};



