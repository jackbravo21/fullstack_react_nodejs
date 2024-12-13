const getCurrentDateTime = require("../utils/dateUtils");
const allDate = getCurrentDateTime();
const { logErrorService } = require("../model/logErrorModel");


async function errorHandler(error, req, res, next) {
    // Verifica se o erro tem um status, senão usa 500
    const statusCode = error.status || 500;
    const message = error.message || "Erro interno do servidor.";

    // Informações automáticas fornecidas pelo Express.js
    const endpoint = req.originalUrl; // URL da requisição
    const method = req.method;       // Método HTTP (GET, POST, etc.)

    // Exibe o erro no console
    console.error(`[ERROR] Status: ${statusCode} | Message: ${message}`);
    
    // Salva o erro no banco
    try {
        await logErrorService.create({
            status_code: statusCode,
            message: message,
            endpoint: endpoint,
            method: method,
            created_at: allDate
        });
    } catch (dbError) {
        console.error("[ERROR] Falha ao salvar o log de erro no banco:", dbError.message);
    }

    // Envia a resposta padronizada
    res.status(statusCode).json({ error: message });
}

module.exports = errorHandler;