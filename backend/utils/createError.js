const LogError = require('../model/logErrorModel'); // Importando o modelo LogError
const { Op } = require("sequelize");

async function createError(message, status, req) {
    const error = new Error(message);
    error.status = status || 500; // Define um status padrão caso não seja fornecido

    // Agora salvamos o erro no banco de dados na tabela log_error
    try {
        await LogError.create({
            status_code: error.status,
            message: message,
            endpoint: req ? req.originalUrl : "Unknown", // Pega o endpoint da requisição
            method: req ? req.method : "Unknown", // Pega o método HTTP
            created_at: new Date().toISOString(), // Data e hora do erro
        });
    } catch (dbError) {
        console.error("Erro ao salvar o log de erro no banco:", dbError);
    }

    delete error.stack; // Remove a stack trace para não exibir o caminho
    return error;
}

module.exports = createError;