const eventoModelo = {
    id: {
        type: 'string',
        description: 'Id do Evento',
    },
    modalidade: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Id da modalidade do esporte',
          }
        },
    },
    autorEvento: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Id do autor do evento',
          }
        },
    },
    nome: {
        type: 'string',
        description: 'Nome do Evento',
    },
    data: {
        type: 'number',
        description: 'Data do Evento',
    },
    local: {
        type: 'string',
        description: 'Local do Evento',
    },
    googleMaps: {
        type: 'string',
        description: 'Google Maps localizacao',
    },
  }
  
  const eventoSchema = {
    description: 'Retorna schema do Evento',
    type: 'object',
    properties: eventoModelo,
  };
    
  export {eventoSchema, eventoModelo};