const usuarioModelo = {
  nome: {
    type: 'string',
    description: 'Nome do usuário',
  },
  email: {
    type: 'string',
    description: 'Email do usuário',
  }
}

const usuarioSchema = {
  description: 'Retorna modelo do Usuário',
  type: 'object',
  properties: usuarioModelo,
};
  
const usuarioListaSchema =  {
  description: 'Retorna lista de Usuários',
  type: 'array',
  items: {
    ...usuarioSchema
  },
};

export {usuarioSchema, usuarioModelo, usuarioListaSchema};
  