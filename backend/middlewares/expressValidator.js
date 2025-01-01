const { body, validationResult } = require('express-validator');

const userValidationRules = [
    body('mail')
        .isEmail().withMessage('Insira um e-mail válido!')
        .normalizeEmail()
        .escape()
        .trim(),        
    body('password')
        .isLength({ min: 6 }).withMessage('A senha deve ter no mínimo 6 caracteres!')
        .matches(/\d/).withMessage('A senha deve conter pelo menos um número!')
];

const validate = (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }
    next();
};

module.exports = { userValidationRules, validate };


//Lembrar de usar DOMPurify no front;
//express-rate-limit no backend;
//biblioteca csurf para tokens CSRF;