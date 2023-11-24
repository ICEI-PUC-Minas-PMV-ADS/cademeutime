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
  };
  
  const eventoSchema = {
    description: 'Retorna schema do Evento',
    type: 'object',
    properties: eventoModelo,
  };

  const eventoLocalizarModelo = {
    id: {
        type: 'string',
        description: 'Google Place ID',
    },
    nome: {
        type: 'string',
        description: 'Nome do Evento',
    },
    latlng: {
        type: 'string',
        description: 'Localização do evento',
    },    
    distancia: {
        type: 'object',
        description: 'Distância em metros',
        properties: {
          texto: {
            type: 'string',
            description: 'Distância por extenso',
          },
          valor: {
            type: 'number',
            description: 'Distância em metros',
          },
        },
    },
  };

  const eventoLocalizarSchema = {
    description: 'Retorna schema de localizações de Evento',
    type: 'array',   
    items: {
      type: 'object',
      properties: eventoLocalizarModelo
    }
  };
    
  export {eventoSchema, eventoModelo, eventoLocalizarSchema, eventoLocalizarModelo};