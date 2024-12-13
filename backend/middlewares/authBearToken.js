//Nao esta sendo utilizado, mas se tirar os cookies, pode ser usado;

const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    // O token vem no cabeçalho Authorization no formato 'Bearer <token>'
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if(!token){
        return res.status(401).json({ Message: "Acesso negado! Token não fornecido." });
    }

    try{
        //Verifica se o token é válido, usando a chave secreta (a mesma usada na criação do token)
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //Coloca as informações do usuário decodificadas no request, como o ID do usuário
    req.user = decoded; //Aqui você pode armazenar mais dados, como id, email, etc.
        next();         //Continua para o próximo middleware ou rota
    }
    catch(error){
        return res.status(401).json({ message: "Token inválido ou expirado." });
    }
};

module.exports = authMiddleware;