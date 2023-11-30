const loginModelo = {
  token: {
    type: 'string',
    description: 'JWT Token para autenticação'
  }
}

const loginSchema = {
  description: 'Retorna se o usuário está logado',
  type: 'object',
  properties: loginModelo,
};

export {loginModelo, loginSchema};
  