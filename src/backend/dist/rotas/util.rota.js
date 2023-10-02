export const error404 = (route) => ({
    description: `Erro ${route} não encontrata (404).`,
    type: 'object',
    properties: {
        code: { type: 'string' },
        message: { type: 'string' },
    },
    required: ['code', 'message'],
    example: {
        code: 'RESOURCE_NOT_FOUND',
        message: 'O recurso solicitado não foi encontrado.',
    },
});
