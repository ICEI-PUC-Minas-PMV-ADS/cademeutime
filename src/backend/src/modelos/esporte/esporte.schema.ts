const esporteModelo = {
    id: {
        type: 'string',
        description: 'Id do esporte',
    },    
    nome: {
        type: 'string',
        description: 'Nome do esporte',
    },
    icone: {
        type: 'string',
        description: 'Ícone do esporte',
    },
  };

  const esporteSchema = {
    description: 'Retorna schema de esporte',
    type: 'array',   
    items: {
      type: 'object',
      properties: esporteModelo
    }
  };

  export { esporteModelo, esporteSchema };