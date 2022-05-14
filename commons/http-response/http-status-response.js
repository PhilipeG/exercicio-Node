const httpStatusResponse = async (code, statusMessage, localError) => ({
    statusCode: (code || 501),
    body: (statusMessage || "Parametros não passados para resposta HTTP"),
    localization: (localError || "Não foi encontrado o local do erro.")
    });
    module.exports = httpStatusResponse;