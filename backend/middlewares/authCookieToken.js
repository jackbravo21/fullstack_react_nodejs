const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    
    const token = req.cookies.token;    //Obtem/Captura o token do cookie;
    if (!token) {
        console.log("Acesso negado, token não fornecido!");
        return res.status(401).json({ message: "Acesso negado, token não fornecido!" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;             //Armazena os dados do token na requisição;
        next();
    } catch (error) {
        console.log("Token inválido!");
        res.status(403).json({ message: "Token inválido!" });
    }
};

module.exports = authenticateToken;