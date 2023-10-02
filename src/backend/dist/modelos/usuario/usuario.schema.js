const usuarioModelo = {
    nome: {
        type: 'string',
        description: 'Nome do usuário',
    },
    email: {
        type: 'string',
        description: 'Email do usuário',
    },
    senha: {
        type: 'string',
        description: 'Senha do usuário',
    },
};
const usuarioSchema = {
    description: 'Retorna modelo do Usuário',
    type: 'object',
    properties: usuarioModelo,
};
export { usuarioSchema, usuarioModelo };
